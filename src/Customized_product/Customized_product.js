import Foods from './Components/Foods'
import Canvas from './Components/Canvas'
import SelectedFood from './Components/SelectedFood'
import './Customized_product.css'
import { useState } from 'react'
function Customized_product() {
  const [isShowed, setIsShowed] = useState(false)

  return (
    <>
      <div class="container-fluid">
        <div class="pho-bg row">
          <Foods isShowed={isShowed} setIsShowed={setIsShowed} />
          <Canvas />
          <SelectedFood />
        </div>
      </div>
    </>
  )
}

export default Customized_product
