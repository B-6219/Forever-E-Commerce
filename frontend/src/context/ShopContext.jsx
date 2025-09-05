import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext({
    products:[],
    currency:'$',
    delivery_Fee: 10,
})

const ShopContextProvider = ({children}) => {

    const currency = '$'
    const delivery_Fee = 10

    const value = {
        products,currency,delivery_Fee
    } 

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider