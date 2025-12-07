import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { products } from "../assets/frontend_assets/assets";

const ShopContextProvider = ({ children }) => {
  const currency = "Ksh";
  const delivery_Fee = 10;

  const  [search , setSearch] = useState('')
  const [showSearch , setShowSearch] = useState(false)

  const value = { 
    products, currency, delivery_Fee ,
    search, setSearch ,showSearch , setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
