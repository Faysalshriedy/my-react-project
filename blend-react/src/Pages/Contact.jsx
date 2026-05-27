function Contact() {
  return (
    <div className='container mt-5'>

      <h2 className='text-center mb-5'>
        Contact Us
      </h2>

      <div className='row'>

        <div className='col-md-6'>

          <h4>Get In Touch</h4>

          <p className='text-muted'>
            Feel free to contact us anytime.
          </p>

          <p>
            <strong>Email:</strong> blend@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> +961 70 123 456
          </p>

          <p>
            <strong>Location:</strong> Lebanon
          </p>

        </div>

        <div className='col-md-6'>

          <form>

            <div className='mb-3'>

              <label>Name</label>

              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
              />

            </div>

            <div className='mb-3'>

              <label>Email</label>

              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
              />

            </div>

            <div className='mb-3'>

              <label>Message</label>

              <textarea
                className='form-control'
                rows='4'
                placeholder='Your message'
              ></textarea>

            </div>

            <button className='btn btn-dark w-100'>
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Contact;