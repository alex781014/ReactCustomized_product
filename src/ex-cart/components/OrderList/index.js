import ProductItem from "./ProductItem"
// import {products} from "../../data/products"

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3種商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((v, i) => {
          {
            /* const {id,name,category,image,price} = v */
          }
          return (
            <ProductItem
              key={v.id}
              {...v}
              removeItem={()=>{
                // 改變狀態三步驟
                const newProductsInOrder = productsInOrder.filter((v2)=>{
                  return v.id !== v2.id
                })
                setProductsInOrder(newProductsInOrder)
              }}
              // count={v.count}
              setCount={(newCount) => {
                const newProductsInOrder = productsInOrder.map((v2) => {
                  return { ...v2 }
                })
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount
                setProductsInOrder(newProductsInOrder)
              }}
              // setCount={(newCount) => {
              //   const newProductsInOrder = productsInOrder.map((v2,i2) => {
              //     if(i2==i){
              //      return {
              //          ...v2,count:newCount<1?1:newCount}
              //        }
              //      return v2
              //   })
              //   setProductsInOrder(newProductsInOrder)
              // }}
            />
          )
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  )
}

export default OrderList