import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';


const LatestCollecction = () => {

  const { products } = useContext(ShopContext)
  //console.log(products);

  const [latestProducts ,setLatestProducts] = useState([])

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0,10))
    }[products]
    
})
  //here
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
      </div>


      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.length > 0 ? (
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>No products available</p>
        )}

      </div>
    </div>
  )
}

export default LatestCollecction
