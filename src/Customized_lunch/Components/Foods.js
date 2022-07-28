import { useState, useEffect } from 'react'
// import foodList from '../data/foodList.json'
import axios from 'axios'

function Foods(props) {
  const [limit, setLimit] = useState([Array(5).fill({ id: 0, name: '' })])
  const {
    dataFromFoodArea,
    setDataFromFoodArea,
    isShowed,
    setIsShowed,
    foodList,
    setFoodList,
  } = props
  const addItem = (item) => {
    const newItem = { ...item, tid: Date.now() }
    setDataFromFoodArea([...dataFromFoodArea, newItem])
  }

  const getUserData = async () => {
    const response = await axios.get(
      'http://localhost:3600/customized_lunch/api'
    )

    setFoodList(response.data.rows)
  }

  useEffect(() => {
    getUserData()
  }, [])

  const limita = () => {
    //有跳alert了 但是 沒辦法像JS return alert跳完還是會叫 要問
    const arrayq = []
    const newdataFromFoodArea = [...dataFromFoodArea].map((v, i) => {
      arrayq.push(v)
      if (arrayq.length >= 5) {
        alert('滿了')
      }
      return arrayq
    })
    setLimit(newdataFromFoodArea)
  }

  //  每個商品物件
  // {
  //   "id": 1,
  //   "name": "白飯",
  //   "category": "1",
  //   "image": "images/rice.png",
  //   "price": 10
  // }
  return (
    <>
      <div
        className={
          isShowed
            ? 'col-md-3 xin-sideMenu showSideBar xin-food-area '
            : 'col-md-3 sideMenuNX hiddenSideBar xin-food-area '
        }
      >
        <ul
          className={
            isShowed
              ? 'nav nav-pills mb-3 flex-nowrap '
              : 'nav nav-pills mb-3 flex-nowrap hidden'
          }
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item xin-nav-item col-3 " role="presentation">
            <button
              className="xin-nav-link nav-link active  m-auto"
              id="staple-food"
              data-bs-toggle="pill"
              data-bs-target="#pills-staple-food"
              type="button"
              role="tab"
              aria-controls="pills-staple-food"
              aria-selected="true"
            >
              主食
            </button>
          </li>
          <li className="nav-item xin-nav-item col-3 " role="presentation">
            <button
              className="xin-nav-link nav-link  m-auto"
              id="meal"
              data-bs-toggle="pill"
              data-bs-target="#pills-meal"
              type="button"
              role="tab"
              aria-controls="pills-meal"
              aria-selected="false"
            >
              肉類
            </button>
          </li>
          <li className="nav-item xin-nav-item col-3 " role="presentation">
            <button
              className="xin-nav-link nav-link  m-auto"
              id="seafood"
              data-bs-toggle="pill"
              data-bs-target="#pills-seafood"
              type="button"
              role="tab"
              aria-controls="pills-seafood"
              aria-selected="false"
            >
              海鮮
            </button>
          </li>
          <li className="nav-item xin-nav-item col-3 " role="presentation">
            <button
              className="xin-nav-link nav-link  m-auto px-0"
              id="vegetable"
              data-bs-toggle="pill"
              data-bs-target="#pills-vegetable"
              type="button"
              role="tab"
              aria-controls="pills-vegetable"
              aria-selected="false"
            >
              青菜類
            </button>
          </li>
        </ul>

        <div
          className={isShowed ? 'tab-content' : 'tab-content hidden'}
          id="pills-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="pills-staple-food"
            role="tabpanel"
            aria-labelledby="pills-staple-food"
          >
            <div className="d-flex flex-wrap ">
              {foodList
                .filter((v, i) => {
                  return v.category === 1
                })
                .map((v, i) => {
                  return (
                    <div
                      key={v.id}
                      className="foodCard col-md-4 col-4 mb-3 card xin-card border-0 align-items-center"
                      onClick={() => {
                        setDataFromFoodArea([...dataFromFoodArea, v])
                        addItem(v)
                        console.log(dataFromFoodArea)
                        // limita()
                      }}
                    >
                      <img
                        className="man xin-card-img-top"
                        src={v.image}
                        alt={v.name}
                      />
                      <div className="card-body xin-card-body">
                        <p className="card-text text-center m-0 pName">
                          {v.name}
                        </p>
                        <p className="card-text text-center">價格:{v.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-meal"
            role="tabpanel"
            aria-labelledby="pills-meal"
          >
            <div className="d-flex flex-wrap">
              {foodList
                .filter((v, i) => {
                  return v.category === 2
                })
                .map((v, i) => {
                  return (
                    <div
                      key={v.id}
                      className="foodCard col-md-4 col-4 mb-3 card xin-card border-0 align-items-center "
                      onClick={() => {
                        setDataFromFoodArea([...dataFromFoodArea, v])
                        addItem(v)
                        limita()
                      }}
                    >
                      <img
                        className="man xin-card-img-top"
                        src={v.image}
                        alt={v.name}
                      />

                      <div className="card-body xin-card-body">
                        <p className="card-text text-center m-0 pName">
                          {v.name}
                        </p>
                        <p className="card-text text-center">價格:{v.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-seafood"
            role="tabpanel"
            aria-labelledby="pills-seafood"
          >
            <div className="d-flex flex-wrap">
              {foodList
                .filter((v, i) => {
                  return v.category === 3
                })
                .map((v, i) => {
                  return (
                    <div
                      key={v.id}
                      className="foodCard col-md-4 col-4 mb-3 card xin-card border-0 align-items-center "
                      onClick={() => {
                        setDataFromFoodArea([...dataFromFoodArea, v])
                        addItem(v)
                        limita()
                      }}
                    >
                      <img
                        className="man xin-card-img-top"
                        src={v.image}
                        alt={v.name}
                      />

                      <div className="card-body xin-card-body">
                        <p className="card-text text-center m-0 pName">
                          {v.name}
                        </p>
                        <p className="card-text text-center">價格:{v.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-vegetable"
            role="tabpanel"
            aria-labelledby="pills-vegetable"
          >
            <div className="d-flex flex-wrap">
              {foodList
                .filter((v, i) => {
                  return v.category === 4
                })
                .map((v, i) => {
                  return (
                    <div
                      key={v.id}
                      className="foodCard col-md-4 col-4 mb-3 card xin-card border-0 align-items-center "
                      onClick={() => {
                        setDataFromFoodArea([...dataFromFoodArea, v])
                        addItem(v)
                        limita()
                      }}
                    >
                      <img
                        className="man xin-card-img-top"
                        src={v.image}
                        alt={v.name}
                      />

                      <div className="card-body xin-card-body">
                        <p className="card-text text-center m-0 pName">
                          {v.name}
                        </p>
                        <p className="card-text text-center">價格:{v.price}</p>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        <button
          className={
            isShowed
              ? 'xin-rightArrow xin-rightArrow-in'
              : 'xin-rightArrow xin-rightArrow-out'
          }
          onClick={() => setIsShowed(isShowed)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  )
}

export default Foods
