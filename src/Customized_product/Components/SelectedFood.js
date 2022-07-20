// import ProductItem from './ProductItem'
import { useState } from 'react'
function SelectedFood(props) {
  const [textArea, setTextArea] = useState('')
  const [foodCount, setFoodCount] = useState('')
  const { isShowedSelectFood, setIsShowedSelectFood } = props

  // const createOptions = (min, max) => {
  //   const options = []

  //   for (let i = min; i < max + 1; i++) {
  //     // i 為數字類型，轉型只是為了統一狀態類型為字串
  //     // 注意保持狀態值的類型在應用程式執行時都一致很重要
  //     const v = String(i)
  //     options.push(<option value={v}>{v}</option>)
  //   }
  //   return options
  // }

  const newArray = () => {
    return Array(5)
      .fill(1)
      .map((v, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))
  }
  return (
    <>
      <div
        className={
          isShowedSelectFood
            ? 'col-md-3 selectedFoodArea showSelectedFoodSideBar'
            : 'col-md-3 selectedFoodSideMenuNX hiddenSelectedFoodSideBar'
        }
      >
        <h3
          className={isShowedSelectFood ? 'text-center' : 'text-center hidden'}
        >
          已選食材
        </h3>
        <div
          className={
            isShowedSelectFood
              ? 'chooseArea d-flex align-items-center '
              : 'chooseArea d-flex align-items-center hidden'
          }
        >
          <div className="detilArea d-flex align-items-center justify-content-between flex-wrap w-100">
            {props.dataFromFoodArea.map((v, i) => (
              <p key={i}>{v.name}</p>
            ))}
            <br />
          </div>
        </div>
        <div
          className={isShowedSelectFood ? 'form-group' : 'form-group hidden'}
        >
          <label htmlFor="exampleFormControlSelect1">選擇便當數量</label>
          <select
            value={foodCount}
            onChange={(e) => {
              setFoodCount(e.target.value)
            }}
            className="form-control lunchbox_stock"
            id="exampleFormControlSelect1"
            name="lunchbox_stock"
            required
          >
            <option value="" disabled>
              -- 請選擇 --
            </option>
            {newArray()}
          </select>
          <label htmlFor="exampleFormControlTextarea1">備註欄</label>
          <textarea
            value={textArea}
            onChange={(e) => {
              setTextArea(e.target.value)
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="custom_remark"
          ></textarea>
          <div className="priceArea btn btn-success my-3 w-100">
            <p className="mb-0">總價:</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ display: 'block' }}
          >
            送出
          </button>
        </div>
        <button
          className={
            isShowedSelectFood
              ? 'leftArrow leftArrow-in'
              : 'leftArrow leftArrow-out'
          }
          onClick={() => setIsShowedSelectFood(isShowedSelectFood)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  )
}

export default SelectedFood
