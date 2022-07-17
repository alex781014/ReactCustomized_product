import {useState} from 'react'
function Foods() {
  const [isShowed,setIsShowed] = useState(false)
  return (
    <>
      <div
        className={
          isShowed
            ? 'col-md-4 foods sideMenu'
            : 'col-md-4 foods sideMenu sideMenuNX'
        }
      >
        <ul
          className="nav nav-pills mb-3 flex-nowrap"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item col-3 " role="presentation">
            <button
              className="nav-link active  m-auto"
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
          <li className="nav-item col-3 " role="presentation">
            <button
              className="nav-link  m-auto"
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
          <li className="nav-item col-3" role="presentation">
            <button
              className="nav-link  m-auto"
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
          <li className="nav-item col-3 " role="presentation">
            <button
              className="nav-link  m-auto"
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
          <button
            className={
              isShowed
                ? 'rightArrow rightArrow-in'
                : 'rightArrow rightArrow-out'
            }
            onClick={() => setIsShowed(!isShowed)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-staple-food"
            role="tabpanel"
            aria-labelledby="pills-staple-food"
          >
            <div className="d-flex flex-wrap ">
              <div className="card border-0 align-items-center ">
                <img className="man card-img-top " src="images/rice.png" />

                <div className="card-body">
                  <p className="card-text text-center m-0 pName">白飯</p>
                  <p className="card-text text-center">價格:20</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-meal"
            role="tabpanel"
            aria-labelledby="pills-meal"
          >
            <div className="d-flex flex-wrap">
              <div className="card border-0 align-items-center">
                <img
                  className="man text-center card-img-top "
                  src="images/chicken.png"
                />
                <div className="card-body">
                  <p className="card-text text-center m-0 pName">宮保雞丁</p>
                  <p className="card-text text-center">價格:35</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-seafood"
            role="tabpanel"
            aria-labelledby="pills-seafood"
          >
            <div className="d-flex flex-wrap">
              <div className="card border-0 align-items-center">
                <img
                  className="man text-center card-img-top"
                  src="images/cod.png"
                />

                <div className="card-body">
                  <p className="card-text text-center m-0 pName">烤鱈魚</p>
                  <p className="card-text text-center">價格:40</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-vegetable"
            role="tabpanel"
            aria-labelledby="pills-vegetable"
          >
            <div className="d-flex flex-wrap">
              <div className="card border-0 align-items-center">
                <img
                  className="man text-center card-img-top "
                  src="images/vegtable.png"
                />

                <div className="card-body">
                  <p className="card-text text-center m-0 pName">花椰菜</p>
                  <p className="card-text text-center">價格:15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Foods
