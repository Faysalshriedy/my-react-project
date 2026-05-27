function ProductCard({ image, title, price, description }) {
  return (

    <div className='col-md-3 mb-4'>

      <div className='card h-100 shadow-sm product-card'>

        <img
          src={image}
          className='card-img-top product-image'
        />

        <div className='card-body text-center'>

          <h5>{title}</h5>

          <p className='text-muted'>
            {description}
          </p>

          <h6>{price}</h6>

          <button className='btn btn-dark mt-2'>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard;