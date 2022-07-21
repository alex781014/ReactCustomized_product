import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
import { useState } from 'react'
import foodList from './data/foodList.json'
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



  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < dataFromFoodArea.length; i++) {
      if(foodCount === null){
        foodCount = 1
      total += dataFromFoodArea[i].price * foodCount

      }else{
      total += dataFromFoodArea[i].price * foodCount

      }
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
          />
          <Canvas />
          <SelectedFood
            isShowedSelectFood={!isShowedSelectFood}
            setIsShowedSelectFood={setIsShowedSelectFood}
            totalPrice={calcTotalPrice()}
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            productsInOrder={productsInOrder}
            setProductsInOrder={setProductsInOrder}
            foodCount={foodCount}
            setFoodCount={setFoodCount}
          />
        </div>
      </div>
    </>
  )
}

export default Customized_product
