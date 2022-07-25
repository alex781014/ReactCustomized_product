import { useEffect, useRef, useState } from 'react'

function Canvas(props) {
  const { cart, setCart } = props
  const [cache, setCache] = useState({})
  const cRef = useRef()
  const shadowRef = useRef()
  const drawLocations = [
    [120, 240],
    [80, 110],
    [250, 140],
    [350, 140],
    [350, 280],
  ]
  const drawSize = [
    [160, 160],
    [130, 110],
    [80, 90],
    [80, 90],
    [80, 90],
  ]

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
    let countComplete = tmpCart.length

    let i = 0
    shadowCtx.clearRect(0, 0, shadowRef.current.width, shadowRef.current.height) // 清除畫面
    let img = await getImageFromPath(`/images/lunchBox.png`) // 背景圖
    shadowCtx.drawImage(img, 0, 0, 500, 500)
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
    localStorage.setItem(key, imgTxt)
    console.log(key, imgTxt)
  }

  useEffect(() => {
    doDraw()
  }, [cart])

  // useEffect(() => {
  //   const canvasFood = document.querySelector('.canvasFood')
  //   const ctx0 = canvasFood.getContext('2d')
  //   const image = new Image()
  //   image.src = 'images/lunchBox.png'
  //   image.onload = () => {
  //     ctx0.drawImage(image, 0, 0, 500, 500)
  //   }
  // }, [])
  return (
    <>
      <div className="col-12 col-md-6 canvas text-center">
        <canvas ref={shadowRef} width="500" height="500" hidden></canvas>
        <canvas
          className="canvasFood"
          id="myCanvas"
          ref={cRef}
          width="500"
          height="500"
        ></canvas>
        <button onClick={saveCanvas}>存起來</button>
      </div>
    </>
  )
}

export default Canvas
