import images from '../images/chicken.png'
function Foods() {
  return (
    <>
      <div className="col-3">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
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

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-staple-food"
            role="tabpanel"
            aria-labelledby="pills-staple-food"
          >
            <div className="d-flex flex-wrap">
              {/* <% for(let i of rows){%>
                                <%if(i.product_type===1){%> */}
              <div className="card border-0 justify-content-center ">
                <img className="man text-center card-img-top " src={images}/>
                {/* src="../images/<%= i.product_img%>" onclick="showcard(event)"
                                            id="<%= i.element_id%>" alt="" data-img="../images/<%= i.product_img%>"
                                            data-pName="<%= i.product_name%>" data-pPrice="<%= i.product_price%>"
                                            data-id="<%= i.element_id%>" */}
                <div className="card-body">
                  <p className="card-text text-center m-0 pName">
                    {/* <%= i.product_name%> */}
                  </p>
                  <p className="card-text text-center">
                    {/* 售價:<%= i.product_price%> */}
                  </p>
                </div>
              </div>
              {/* <%}%>
                                        <%}%> */}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-meal"
            role="tabpanel"
            aria-labelledby="pills-meal"
          >
            <div className="d-flex flex-wrap">
              {/* <% for(let i of rows){%>
                                <%if(i.product_type===3){%> */}
              <div className="card border-0 justify-content-center ">
                <img className="man text-center card-img-top" />
                {/* src="../images/<%= i.product_img%>" onclick="showcard(event)"
                                            id="<%= i.element_id%>" alt="" data-img="../images/<%= i.product_img%>"
                                            data-pName="<%= i.product_name%>" data-pPrice="<%= i.product_price%>" */}
                <div className="card-body">
                  <p className="card-text text-center m-0 pName">
                    {/* <%= i.product_name%> */}
                  </p>
                  <p className="card-text text-center">
                    {/* 售價:<%= i.product_price%> */}
                  </p>
                </div>
              </div>
              {/* <%}%>
                                        <%}%> */}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-seafood"
            role="tabpanel"
            aria-labelledby="pills-seafood"
          >
            <div className="d-flex flex-wrap">
              {/* <% for(let i of rows){%>
                                <%if(i.product_type===4){%> */}
              <div className="card border-0 justify-content-center ">
                <img className="man text-center card-img-top " />

                {/* src="../images/<%= i.product_img%>" onclick="showcard(event)"
                                            id="<%= i.element_id%>" alt="" data-img="../images/<%= i.product_img%>"
                                            data-pName="<%= i.product_name%>" data-pPrice="<%= i.product_price%>" */}
                <div className="card-body">
                  <p className="card-text text-center m-0 pName">
                    {/* <%= i.product_name%> */}
                  </p>
                  <p className="card-text text-center">
                    {/* 售價:<%= i.product_price%> */}
                  </p>
                </div>
              </div>
              {/* <%}%>
                                        <%}%> */}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-vegetable"
            role="tabpanel"
            aria-labelledby="pills-vegetable"
          >
            <div className="d-flex flex-wrap">
              {/* <% for(let i of rows){%>
                                <%if(i.product_type===2){%> */}
              <div className="card border-0 justify-content-center ">
                <img className="man text-center card-img-top " />

                {/* src="../images/<%= i.product_img%>" onclick="showcard(event)"
                                            id="<%= i.element_id%>" alt="" data-img="../images/<%= i.product_img%>"
                                            data-pName="<%= i.product_name%>" data-pPrice="<%= i.product_price%>" */}
                <div className="card-body">
                  <p className="card-text text-center m-0 pName">
                    {/* <%= i.product_name%> */}
                  </p>
                  <p className="card-text text-center">
                    {/* 售價:<%= i.product_price%> */}
                  </p>
                </div>
              </div>
              {/* <%}%>
                                        <%}%> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Foods
