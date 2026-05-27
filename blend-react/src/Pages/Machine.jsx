import { useState } from 'react'

function Machine() {

  const [mainImage, setMainImage] =
    useState('/images/ma.webp')

  return (
    <div className='container mt-5'>

      <div className='row align-items-center'>

        <div className='col-md-6'>

          <img
            src={mainImage}
            className='img-fluid rounded shadow machine-image'
          />

          <div className='d-flex gap-2 mt-3'>

            <img
              src='/images/images2.webp'
              className='thumb-image'
              onClick={() =>
                setMainImage('/images/images2.webp')
              }
            />

            <img
              src='/images/ma.webp'
              className='thumb-image'
              onClick={() =>
                setMainImage('/images/ma.webp')
              }
            />

            <img
              src='/images/machine 2.webp'
              className='thumb-image'
              onClick={() =>
                setMainImage('/images/machine 2.webp')
              }
            />

          </div>

        </div>

        <div className='col-md-6'>

          <h2 className='fw-bold'>
            Turkish Coffee Machine
          </h2>

          <h4 className='text-muted'>
            $99
          </h4>

          <p className='mt-3'>
            Professional coffee machine with modern design.
          </p>

          <h6 className='mt-4'>
            Quantity
          </h6>

          <input
            type='number'
            className='form-control w-25 mb-3'
            defaultValue='1'
            min='1'
          />

          <button className='btn btn-dark w-50'>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default Machine;