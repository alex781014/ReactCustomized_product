// import ProductItem from './ProductItem'

function SelectedFood(props) {
  const createOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      // i 為數字類型，轉型只是為了統一狀態類型為字串
      // 注意保持狀態值的類型在應用程式執行時都一致很重要
      const v = String(i)
      options.push(<option value={v}>{v}</option>)
    }
    return options
  }

  // const newArray = () => {
  //   return Array(5)
  //     .fill(1)
  //     .map((v, i) => <option value={i + 1}>{i + 1}</option>)
  // }
  return (
    <>
      <div className="col-md-3 ">
        <h3 className="text-center">已選食材</h3>
        <div className="chooseArea d-flex  align-items-center ">
          <div className="detilArea d-flex align-items-center justify-content-between flex-wrap w-100"></div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">選擇便當數量</label>
          <select
            onChange="getcount()"
            className="form-control lunchbox_stock"
            id="exampleFormControlSelect1"
            name="lunchbox_stock"
            required
          >
            <option value="" selected disabled>
              -- 請選擇 --
            </option>
            {createOptions(1, 5)}
          </select>
          <label htmlFor="exampleFormControlTextarea1">備註欄</label>
          <textarea
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
      </div>
    </>
  )
}

export default SelectedFood
