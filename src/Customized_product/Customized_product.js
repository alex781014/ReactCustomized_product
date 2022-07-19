import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
import { useState } from 'react'
import foodList from './data/foodList.json'
//初始化狀態用的函式
const initState = (productArray) => {
  const state = []

  for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 })
  }

  return state
}
function Customized_product() {
  const [isShowed, setIsShowed] = useState(true)
  const [isShowedSelectFood, setIsShowedSelectFood] = useState(true)
  const [productsInOrder, setProductsInOrder] = useState(initState(foodList))
  const [appendImage, setAppendImage] = useState({
    id: '',
    name: '',
    category: '',
    image: '',
    price: '',
  })
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count
    }

    return total
  }

  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      total += productsInOrder[i].count * productsInOrder[i].price
    }

    return total
  }

  return (
    <>
      <div className="container-fluid">
        <div className="pho-bg row">
          <Foods
            isShowed={!isShowed}
            setIsShowed={setIsShowed}
            productsInOrder={productsInOrder}
            setProductsInOrder={setProductsInOrder}
          />
          <Canvas />
          <SelectedFood
            isShowedSelectFood={!isShowedSelectFood}
            setIsShowedSelectFood={setIsShowedSelectFood}
            totalNumber={calcTotalNumber()}
            totalPrice={calcTotalPrice()}
          />
        </div>
      </div>
    </>
  )
}

export default Customized_product
