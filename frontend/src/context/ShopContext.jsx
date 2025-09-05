import { createContext } from "react";

// Default values (safe fallback if provider not used)
export const ShopContext = createContext({
  products: [],
  currency: "$",
  delivery_Fee: 10,
});
