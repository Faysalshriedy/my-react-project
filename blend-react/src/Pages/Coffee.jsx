import ProductCard from '../components/CupCard'

function Coffee() {

  const coffeeData = [

    {
      id: 1,
      title: 'Blend 100gr',
      price: '$14',
      image: '/images/coffe.webp',
      description: 'Premium coffee beans'
    },

    {
      id: 2,
      title: 'Espresso Beans',
      price: '$6',
      image: '/images/esspsese.webp',
      description: 'Strong espresso flavor'
    },

    {
      id: 3,
      title: 'Harari Beans',
      price: '$5',
      image: '/images/harari.webp',
      description: 'Rich coffee taste'
    },

    {
      id: 4,
      title: 'Colombian Coffee',
      price: '$5.3',
      image: '/images/colom.webp',
      description: 'Smooth roasted coffee'
    }

  ]

  return (
    <div className='container mt-5'>

      <h2 className='text-center mb-4'>
        Our Coffee
      </h2>

      <div className='row'>

        {coffeeData.map((item) => (

          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />

        ))}

      </div>

    </div>
  )
}

export default Coffee;