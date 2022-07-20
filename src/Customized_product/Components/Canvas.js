import React from 'react'

function Canvas() {
  return (
    <>
      <div className="col-12 col-md-6">
        <img
          className="d-none newImg"
          src="../images/images.jpg"
          id="bg1"
          alt=""
        />
        <div className="photo"></div>
        <div className="cancasArea d-flex justify-content-center">
          <canvas id="myCanvas"></canvas>
        </div>
      </div>
    </>
  )
}

export default Canvas
