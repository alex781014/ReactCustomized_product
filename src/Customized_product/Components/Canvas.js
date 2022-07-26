/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

function Canvas(props) {
  const { cart, setCart, totalPrice, foodCount, setFoodCount } = props
  const [cache, setCache] = useState({})
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

    const tmpCart = cart.slice(0, 5) // 只取前面五筆
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
  }, [cart])

  return (
    <>
      <div className="col-12 col-md-6 canvas text-center">
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
        <div className="d-flex justify-content-center flex-wrap">
          <div className="form-group d-flex align-items-center justify-content-md-end justify-content-center col-md-6 col-12 mb-3 mb-md-0">
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
              className="custom-select lunchbox_stock  me-3 "
              id="exampleFormControlSelect1"
              name="lunchbox_stock"
              required
            >
              {lunchCount()}
            </select>
          </div>
          <div className="canvasBtns col-md-6 col-12 d-flex justify-content-center justify-content-md-start">
            <button className="priceArea xin-btn btn btn-success me-3 xin-font-primary-color">
              總價:{totalPrice}
            </button>
            <button className="btn btn-primary" onClick={saveCanvas}>
              送出訂單
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Canvas
