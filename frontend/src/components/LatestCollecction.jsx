import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';
import Title from './Title.jsx';


const LatestCollecction = () => {

  const { products } = useContext(ShopContext)
  console.log(products);

  const {latestProducts ,setLatestProducts} = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  })
  //here
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
      </div>
    </div>
  )
}

export default LatestCollecction
