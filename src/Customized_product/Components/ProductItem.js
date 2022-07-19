function ProductItem(props) {
  //  每個商品物件
  //   {
  //     "id": 1,
  //     "name": "白飯",
  //     "category": "1",
  //     "image": "images/rice.png",
  //     "price": 10
  //   }

  // eslint-disable-next-line no-unused-vars
  const { id, name, category, image, price } = props

  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            {/* <div className="row text-muted">{category}</div> */}
            <div className="row">{name}</div>
          </div>

          <div className="col">
            ${price}
            <span className="close">&#10005;</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
