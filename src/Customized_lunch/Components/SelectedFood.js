/* eslint-disable no-restricted-globals */
// import ProductItem from './ProductItem'
import React from 'react'
function SelectedFood(props) {
  const {
    isShowedSelectFood,
    setIsShowedSelectFood,
    dataFromFoodArea,
    setDataFromFoodArea,
    calcCount,
  } = props

  const removeItem = (index) => {
    const newCart = [...dataFromFoodArea]
    newCart.splice(index, 1)
    setDataFromFoodArea(newCart)
  }

  return (
    <>
      <div
        className={
          isShowedSelectFood
            ? 'col-md-3 g-0 selectedFoodArea showSelectedFoodSideBar d-flex flex-column '
            : 'col-md-3  g-0 selectedFoodArea selectedFoodSideMenuNX hiddenSelectedFoodSideBar d-flex flex-column '
        }
      >
        <h3
          className={
            isShowedSelectFood
              ? 'text-center xin-font-primary-color mt-5'
              : 'text-center hidden xin-font-primary-color mt-5 '
          }
        >
          目前已選{calcCount ? calcCount : 0}樣食材
        </h3>

        <div
          className={
            isShowedSelectFood
              ? 'chooseArea d-flex align-items-center '
              : 'chooseArea d-flex align-items-center hidden '
          }
        >
          <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
            <div
              className={
                isShowedSelectFood
                  ? 'd-flex w-100 text-center border-bottom border-dark border-3'
                  : 'd-flex w-100 text-center '
              }
            >
              <div className={isShowedSelectFood ? 'col-3' : 'col-3 hidden'}>
                食材
              </div>
              <div className={isShowedSelectFood ? 'col-4' : 'col-4 hidden'}>
                食材名稱
              </div>
              <div className={isShowedSelectFood ? 'col-3' : 'col-3 hidden'}>
                價格
              </div>
              <div className={isShowedSelectFood ? 'col-2' : 'col-2 hidden'}>
                刪除
              </div>
            </div>
            {/* 限制五次 */}
            {dataFromFoodArea.slice(0, 5).map((v, i) => {
              const v2 = { ...v, tid: Math.round(Math.random() * 10_000) }
              return (
                <div
                  {...v2}
                  key={'foods' + v2.tid}
                  className={
                    isShowedSelectFood
                      ? 'd-flex justify-content-between w-100 xin-font-primary-color mb-2 border-bottom py-2'
                      : 'd-flex justify-content-between w-100 xin-font-primary-color mb-2 '
                  }
                >
                  <div
                    className={
                      isShowedSelectFood
                        ? 'selectedFoodImg text-center col-3'
                        : 'selectedFoodImg text-center col-3 hidden'
                    }
                  >
                    <img src={v.image} className=" selectedDetil" alt="" />
                  </div>

                  <p
                    className={
                      isShowedSelectFood
                        ? 'm-0 align-self-center col-4 text-center'
                        : 'm-0 align-self-center col-4 text-center hidden'
                    }
                  >
                    {v.name}
                  </p>
                  <p
                    className={
                      isShowedSelectFood
                        ? 'm-0 align-self-center col-4 text-center'
                        : 'm-0 align-self-center col-4 text-center hidden'
                    }
                  >
                    價格:{v.price}
                  </p>
                  <div className="selectedDelete d-flex align-items-center col-1">
                    <i
                      className={
                        isShowedSelectFood
                          ? 'fa-solid fa-trash '
                          : 'fa-solid fa-trash  hidden'
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
