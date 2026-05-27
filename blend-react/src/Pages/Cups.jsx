import ProductCard from '../components/CupCard'

function Cups() {

  const cupsData = [

    {
      id: 1,
      title: 'Coffee Jar',
      price: '$5',
      image: 'images/cup.webp',
      description: 'High quality coffee jar'
    },

    {
      id: 2,
      title: 'Travel Mug',
      price: '$15',
      image: '/images/travel mug.webp',
      description: 'Modern travel mug'
    },

    {
      id: 3,
      title: 'Summer Mug',
      price: '$40',
      image: '/images/summer mug.webp',
      description: 'Luxury design'
    },

    {
      id: 4,
      title: 'Tote Bag',
      price: '$8',
      image: '/images/tote bags.webp',
      description: 'Elegant style'
    }

  ]

  return (
    <div className='container mt-5'>

      <h2 className='text-center mb-4'>
        Our Cups
      </h2>

      <div className='row'>

        {cupsData.map((item) => (

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

export default Cups;