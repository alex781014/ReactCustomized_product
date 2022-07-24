import React, { useRef, useState, useEffect } from 'react'
import productData from '../data/foodList.json'

export default function ThxTeacher() {
  const cRef = useRef()
  const shadowRef = useRef()
  const [cart, setCart] = useState([])
  const drawLocations = [
    [0, 0],
    [560, 0],
    [280, 189],
    [0, 378],
    [560, 378],
  ]

  const addItem = (item) => {
    const newItem = { ...item, tid: Date.now() }
    console.log(newItem)
    setCart([...cart, newItem])
  }
  const removeItem = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  useEffect(() => {
    const ctx = shadowRef.current.getContext('2d')
    const ctx2 = cRef.current.getContext('2d')
    ctx.clearRect(0, 0, shadowRef.current.width, shadowRef.current.height) // 清除畫面
    const newCart = cart.slice(0, 5)
    let countComplete = newCart.length
    newCart.forEach((v, i) => {
      const img = new Image()
      img.onload = function () {
        ctx.drawImage(img, drawLocations[i][0], drawLocations[i][1], 200, 200)
        countComplete--
        if (countComplete <= 0) {
          ctx2.clearRect(0, 0, cRef.current.width, cRef.current.height) // 清除畫面
          ctx2.drawImage(shadowRef.current, 0, 0)
        }
      }
      img.src = `${v.image}`
    })
    if (!newCart.length) {
      ctx2.clearRect(0, 0, cRef.current.width, cRef.current.height) // 清除畫面ß
    }
  }, [cart])

  return (
    <div>
      {productData.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: 'inline-block' }}
            onClick={() => addItem(item)}
          >
            <img src={`${item.image}`} width="120px" alt={item.name} />
          </div>
        )
      })}
      <br />
      <canvas ref={shadowRef} width="800" height="600" hidden></canvas>
      <canvas
        ref={cRef}
        width="800"
        height="600"
        style={{ border: '1px dotted blue' }}
      ></canvas>
      <br />
      {cart.map((item, i) => {
        return (
          <div
            key={item.tid}
            style={{ display: 'inline-block' }}
            onClick={() => removeItem(i)}
          >
            <img src={`${item.image}`} width="120px" alt={item.name} />
          </div>
        )
      })}
    </div>
  )
}
