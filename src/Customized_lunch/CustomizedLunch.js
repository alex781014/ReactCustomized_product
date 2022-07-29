import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
import { useState } from 'react'
// import foodList from './data/foodList.json'
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
  const [dataFromFoodArea, setDataFromFoodArea] = useState([])
  const [foodCount, setFoodCount] = useState(1)
  const [foodList, setFoodList] = useState([]) //撈資料庫

  const caclTotalCount = () => {
    let count = 0
    for (let i = 0; i < dataFromFoodArea.length; i++) {
      count = dataFromFoodArea.length
    }
    return count
  }

  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < dataFromFoodArea.length; i++) {
      total += dataFromFoodArea[i].price * foodCount
    }
    return total
  }

  return (
    <>
      {console.log('render')}
      <div className="container-fluid g-0">
        <div className="pho-bg row w-100 m-0">
          <Foods
            isShowed={!isShowed}
            setIsShowed={setIsShowed}
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            foodList={foodList}
            setFoodList={setFoodList}
          />
          <Canvas
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
            totalPrice={calcTotalPrice()}
            foodCount={foodCount}
            setFoodCount={setFoodCount}
          />
          <SelectedFood
            calcCount={caclTotalCount()}
            foodList={foodList}
            isShowedSelectFood={!isShowedSelectFood}
            setIsShowedSelectFood={setIsShowedSelectFood}
            dataFromFoodArea={dataFromFoodArea}
            setDataFromFoodArea={setDataFromFoodArea}
          />
        </div>
      </div>
    </>
  )
}

export default Customized_product
