import { useEffect, useRef, useState } from 'react'

function Canvas(props) {
  const { cart, setCart } = props
  // const [drawCanvas, setDrawCanvas] = useState([])
  const cRef = useRef()
  const shadowRef = useRef()
  // const myCanvas = useRef()
  const drawLocations = [
    [120, 240],
    [80, 110],
    [250, 140],
    [350, 140],
    [350, 250],
  ]
  const drawSize = [
    [160, 160],
    [130, 100],
    [80, 90],
    [80, 90],
    [80, 90],
  ]

  const drawimgs = () => {
    const context = context.current.getContext('2d')
    const img = new Image()
    img.src = 'images/lunchBox.png'
  context.drawImage(img, 0, 0, 500, 500)
  }

  
  // const myCanvas = useRef()
  // useEffect(() => {
  //   const context = myCanvas.current.getContext('2d')
  // const image = new Image()
  // image.src = 'images/lunchBox.png'
  //   image.onload = () => {
  // context.drawImage(image, 0, 0, 500, 500)
  //     drawimgs()
  //   }
  // }, [])
  // useEffect(() => {
  //   const ctx0 = myCanvas.current.getContext('2d')
  //   const image = new Image()
  //   image.src = 'images/lunchBox.png'
  //   image.onload = () => {
  //     ctx0.drawImage(image, 0, 0, 500, 500)
  //   }
  // }, [])

  useEffect(() => {
    const ctx = shadowRef.current.getContext('2d')
    const ctx2 = cRef.current.getContext('2d')
    ctx.clearRect(0, 0, shadowRef.current.width, shadowRef.current.height) // 清除畫面
    const newCart = cart.slice(0, 5)
    let countComplete = newCart.length
    newCart.forEach((v, i) => {
      const img = new Image()
      img.onload = () => {
        // img.src = 'images/lunchBox.png'
        // ctx.drawImage(img,0,0,500,500)
        ctx.drawImage(
          img,
          drawLocations[i][0],
          drawLocations[i][1],
          drawSize[i][0],
          drawSize[i][1]
        )
        countComplete--
        if (countComplete <= 0) {
          ctx2.clearRect(0, 0, cRef.current.width, cRef.current.height) // 清除畫面    //這行註解的話 畫面不會被清空 但是沒辦法畫布上刪除食材
          ctx2.drawImage(shadowRef.current, 0, 0)
        }
      }
      img.src = `${v.image}`
    })
    if (!newCart.length) {
      ctx2.clearRect(0, 0, cRef.current.width, cRef.current.height) // 清除畫面ß
    }
  }, [cart])

  useEffect(() => {
    const canvasFood = document.querySelector('.canvasFood')
    const ctx0 = canvasFood.getContext('2d')
    const image = new Image()
    image.src = 'images/lunchBox.png'
    image.onload = () => {
      ctx0.drawImage(image, 0, 0, 500, 500)
    }
  }, [])
  return (
    <>
      <div className="col-12 col-md-6 canvas text-center">
        <canvas ref={shadowRef} width="500" height="500" hidden></canvas>
        <canvas
          className="canvasFood"
          ref={cRef}
          width="500"
          height="500"
          style={{ border: '1px dotted blue' }}
        ></canvas>
      </div>
    </>
  )
}

export default Canvas
