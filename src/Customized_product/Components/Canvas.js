import { useEffect, useRef, useState } from 'react'

function Canvas(props) {
  const { productsInOrder, dataFromFoodArea, setDataFromFoodArea } = props
  const [drawCanvas, setDrawCanvas] = useState([])
  const drawimgs = () => {
    const context = myCanvas.current.getContext('2d')
    const img = new Image()
    img.src = productsInOrder[0].image
    console.log(img.src)

    context.drawImage(img, 120, 250, 150, 150)
  }
  const myCanvas = useRef()
  useEffect(() => {
    const context = myCanvas.current.getContext('2d')
    const image = new Image()
    image.src = 'images/lunchBox.png'
    image.onload = () => {
      context.drawImage(image, 0, 0, 500, 500)
      drawimgs()
    }
  }, [])
  return (
    <>
      <div className="col-12 col-md-6 canvas text-center">
        {/* {dataFromFoodArea.map((v, i) => {
          const v2 = { ...v, tid: Math.round(Math.random() * 10_000_000) }
          return (
            <div {...v2} key={'foods' + v2.tid}>
              <p>{v.image}</p>
            </div>
          )
        })} */}
        <canvas
          className="myCanvas"
          ref={myCanvas}
          width={500}
          height={500}
        ></canvas>
      </div>
    </>
  )
}

export default Canvas
