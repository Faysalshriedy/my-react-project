import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

      <header className='hero-section d-flex align-items-center'>

        <div className='container text-white'>

          <h1 className='display-4 fw-bold'>
            Blend Coffee
          </h1>

          <p className='lead'>
            Premium coffee experience for coffee lovers
          </p>
<div className="d-flex align-items-center mt-3">
  <Link to='/coffee' className='btn btn-dark'>
    Explore Coffee
  </Link>
  <img src="/images/beans.webp" alt="Coffee" style={{width: '300px', height: '300px', objectFit: 'cover'}} className="rounded ms-3" />
</div>
</div>
      </header>

      <div className='container mt-5'>

        <div className='row align-items-center'>

          <div className='col-md-6'>

            <img
              src='/images/blend.png'
              className='img-fluid rounded shadow'
            />

          </div>

          <div className='col-md-6'>

            <h2>About Blend</h2>

            <p>
              Blend is a modern coffee brand that offers premium drinks,
              coffee beans, and coffee accessories.
            </p>

            <p>
              Our goal is to provide a unique coffee experience with
              high quality products and modern design.
            </p>

          </div>

        </div>

      </div>

    </>
  )
}

export default Home;