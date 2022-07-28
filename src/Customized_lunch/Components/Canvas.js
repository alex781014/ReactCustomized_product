/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

function Canvas(props) {
  const { totalPrice, foodCount, setFoodCount, dataFromFoodArea } = props
  const [cache, setCache] = useState({})
  const [textArea, setTextArea] = useState('')
  const cRef = useRef()
  const shadowRef = useRef()
  const drawLocations = [
    [110, 290],
    [110, 150],
    [300, 155],
    [420, 155],
    [400, 350],
  ]
  const drawSize = [
    [250, 160],
    [150, 110],
    [100, 125],
    [100, 150],
    [130, 100],
  ]
  const lunchCount = () => {
    return Array(5)
      .fill(1)
      .map((v, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))
  }

  const getImageFromPath = async (path) => {
    return new Promise((resolve, reject) => {
      if (!!cache[path]) {
        return resolve(cache[path])
      }
      const img = new Image()
      img.onload = function () {
        resolve(img)
        setCache({ ...cache, [path]: img })
      }
      img.src = path
    })
  }

  const doDraw = async () => {
    const shadowCtx = shadowRef.current.getContext('2d')
    const realCtx = cRef.current.getContext('2d')

    const tmpCart = dataFromFoodArea.slice(0, 5) // 只取前面五筆
    // let countComplete = tmpCart.length

    let i = 0
    shadowCtx.clearRect(0, 0, shadowRef.current.width, shadowRef.current.height) // 清除畫面
    let img = await getImageFromPath(`/images/lunchBox.png`) // 背景圖
    shadowCtx.drawImage(img, 0, 0, 600, 600)
    for (let item of tmpCart) {
      img = await getImageFromPath(`${item.image}`)
      shadowCtx.drawImage(
        img,
        drawLocations[i][0],
        drawLocations[i][1],
        drawSize[i][0],
        drawSize[i][1]
      )
      i++
    }
    realCtx.clearRect(0, 0, cRef.current.width, cRef.current.height) // 清除畫面
    realCtx.drawImage(shadowRef.current, 0, 0)
  }
  // 存canvas畫布
  const saveCanvas = () => {
    const imgTxt = cRef.current
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let key = 'draw-food;;' + new Date().getTime()
    sessionStorage.setItem(key, imgTxt)
  }

  useEffect(() => {
    doDraw()
  }, [dataFromFoodArea])
  //送資料
  async function sendData(event) {
    event.preventDefault()
    alert("訂單即將送出，請確認訂單食材，如確認無誤請按'確定'送出訂單")
    const fd = new FormData(document.form1)
    fd.append('lunch_1', JSON.stringify(dataFromFoodArea[0].name))
    fd.append('lunch_2', JSON.stringify(dataFromFoodArea[1].name))
    fd.append('lunch_3', JSON.stringify(dataFromFoodArea[2].name))
    fd.append('lunch_4', JSON.stringify(dataFromFoodArea[3].name))
    fd.append('lunch_5', JSON.stringify(dataFromFoodArea[4].name))
    fd.append('total_price', JSON.stringify(totalPrice))
    // fd.append('lunch_pic', sessionStorage.getItem(key, imgTxt))

    try {
      const response = await fetch(
        'http://localhost:3600/customized_lunch/add',
        {
          method: 'POST',
          body: fd,
        }
      )
      const result = await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="col-12 col-md-6 xin-canvas text-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb m-3">
            <li className="breadcrumb-item ">
              <a className="text-decoration-none" href="#/">
                首頁
              </a>
            </li>
            <li className="breadcrumb-item active " aria-current="page">
              客製化餐點
            </li>
          </ol>
        </nav>
        <h2 className="xinCanvasTitle m-0 xin-font-primary-color">
          客製化餐點
        </h2>
        <canvas ref={shadowRef} width="600" height="600" hidden></canvas>
        <canvas
          className="canvasFood"
          id="myCanvas"
          ref={cRef}
          width="600"
          height="600"
        ></canvas>
        <form
          name="form1"
          onSubmit={() => {
            sendData(event)
          }}
        >
          <div className="xin-canvas-topay d-flex flex-column align-items-center flex-wrap">
            <div className="form-group d-flex align-items-center  justify-content-center col-md-6 col-12 mb-3">
              <label
                htmlFor="exampleFormControlSelect1 "
                className="xin-font-primary-color h4 m-0 pe-1"
              >
                請選擇便當數量:
              </label>
              <select
                value={foodCount}
                onChange={(e) => {
                  setFoodCount(e.target.value)
                }}
                className="form-select lunchbox_stock  me-3 "
                id="exampleFormControlSelect1"
                name="lunchbox_stock"
                required
              >
                {lunchCount()}
              </select>
            </div>
            <div className="canvaslabelTitle form-group d-flex flex-column  mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="canvaslabel"
              >
                備註欄:
              </label>
              <textarea
                value={textArea}
                onChange={(e) => {
                  setTextArea(e.target.value)
                }}
                className="form-control canvasTextArea "
                id="exampleFormControlTextarea1"
                rows="3"
                name="custom_remark"
              ></textarea>
            </div>
            <div className="canvasBtns  d-flex justify-content-center  mb-md-3">
              <button className="priceArea price-btn btn btn-success me-3 xin-font-primary-color">
                總價:{totalPrice}
              </button>
              <button
                type="submit"
                className="btn btn-primary pay-btn"
                onClick={saveCanvas}
              >
                送出訂單
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Canvas
