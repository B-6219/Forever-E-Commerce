import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx';


const LatestCollecction = () => {

  const { products } = useContext(ShopContext)


  console.log(products);
  
  return (
    <div>
      
    </div>
  )
}

export default LatestCollecction
