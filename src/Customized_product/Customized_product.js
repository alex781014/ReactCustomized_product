import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
import { useState, useEffect } from 'react'
import foodList from './data/foodList.json'
// import axios from 'axios'
//初始化狀態用的函式
// const initState = (productArray) => {
//   const state = []

//   for (let i = 0; i < productArray.length; i++) {
//     state.push({
//       ...productArray[i],
//       count: 1,
//       id: productArray[i].id + new Date().getTime(),
//     })
//   }
//   return state
// }
function Customized_product() {
  const [isShowed, setIsShowed] = useState(true)
  const [isShowedSelectFood, setIsShowedSelectFood] = useState(true)
  const [productsInOrder, setProductsInOrder] = useState(foodList)
  const [dataFromFoodArea, setDataFromFoodArea] = useState([])
  const [foodCount, setFoodCount] = useState(1)
  const [cart, setCart] = useState([])

  // const [userData, setUserData] = useState([]) //撈資料庫

  // const getUserData = async () => {
  //   const response = await axios.get(
  //     'http://localhost:3600/customized_lunch/api'
  //   )
  //   console.log(response.data)

  //   setUserData(response.data)
  // }

  useEffect(() => {
    // getUserData()
  }, [])

  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < dataFromFoodArea.length; i++) {
      total += dataFromFoodArea[i].price * foodCount
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
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            cart={cart}
            setCart={setCart}
          />
          <Canvas
            productsInOrder={productsInOrder}
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            cart={cart}
            setCart={setCart}
            totalPrice={calcTotalPrice()}
            foodCount={foodCount}
            setFoodCount={setFoodCount}
          />
          <SelectedFood
            isShowedSelectFood={!isShowedSelectFood}
            setIsShowedSelectFood={setIsShowedSelectFood}
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            productsInOrder={productsInOrder}
            setProductsInOrder={setProductsInOrder}
            foodCount={foodCount}
            setFoodCount={setFoodCount}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </>
  )
}

export default Customized_product
