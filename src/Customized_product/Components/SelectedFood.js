// import ProductItem from './ProductItem'
import { useState } from 'react'
function SelectedFood(props) {
  const [textArea, setTextArea] = useState('')
  const {
    isShowedSelectFood,
    setIsShowedSelectFood,
    dataFromFoodArea,
    setDataFromFoodArea,
    foodCount,
    setFoodCount,
    totalPrice,
    cart,
    setCart
  } = props
    const removeItem = (index) => {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }

  const lunchCount = () => {
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
            : 'col-md-3  selectedFoodArea selectedFoodSideMenuNX hiddenSelectedFoodSideBar'
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
              : 'chooseArea d-flex align-items-center hidden '
          }
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            {/* 限制五次 */}
            {dataFromFoodArea.slice(0, 5).map((v, i) => {
              const v2 = { ...v, tid: Math.round(Math.random() * 10_000_000) }
              return (
                <div
                  {...v2}
                  key={'foods' + v2.tid}
                  className="d-flex justify-content-between w-100"
                >
                  <div
                    className={
                      isShowedSelectFood
                        ? 'selectedFoodImg'
                        : 'selectedFoodImg hidden'
                    }
                  >
                    <img src={v.image} className=" selectedDetil" alt="" />
                  </div>

                  <p
                    key={i}
                    className={
                      isShowedSelectFood
                        ? 'm-0 align-self-center'
                        : 'm-0 align-self-center hidden'
                    }
                  >
                    {v.name}
                  </p>
                  <p
                    className={
                      isShowedSelectFood
                        ? 'm-0 align-self-center'
                        : 'm-0 align-self-center hidden'
                    }
                  >
                    價格:{v.price}
                  </p>
                  <div className="selectedDelete d-flex align-items-center">
                    <i
                      className={
                        isShowedSelectFood
                          ? 'fa-solid fa-trash'
                          : 'fa-solid fa-trash hidden'
                      }
                      onClick={() => {
                        const newDelete = dataFromFoodArea.filter((v2, i2) => {
                          return i !== i2
                        })
                        setDataFromFoodArea(newDelete)
                        removeItem(i)
                      }}
                    ></i>
                  </div>
                </div>
              )
            })}
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
              console.log(e.target.value)
            }}
            className="form-control lunchbox_stock"
            id="exampleFormControlSelect1"
            name="lunchbox_stock"
            required
          >
            {lunchCount()}
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
            <p className="mb-0">總價:{totalPrice}</p>
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
              ? 'xin-leftArrow xin-leftArrow-in'
              : 'xin-leftArrow xin-leftArrow-out'
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
