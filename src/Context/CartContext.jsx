import { createContext, useContext } from 'react';
import { initialProducts } from '../data/data';

const CartContext = createContext();
2
export const CartProvider = ({ children }) => {
  const products = initialProducts;

  return (
    <CartContext.Provider value={{ products }}>
        {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);