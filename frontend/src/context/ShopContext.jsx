import { createContext } from "react";



// Default values (safe fallback if provider not used)
export const ShopContext = createContext({
  products: [],
  currency: "Ksh",
  delivery_Fee: 10,
});
