import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
function Customized_product() {
  return (
    <>
      <div class="container-fluid">
        <div class="pho-bg row">
          <Foods />
          <Canvas />
          <SelectedFood />
        </div>
      </div>
    </>
  )
}

export default Customized_product
