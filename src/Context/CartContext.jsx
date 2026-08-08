import { createContext, useContext } from 'react';
import { initialProducts } from '../data/data';
import { useState } from 'react';
import { useMemo } from 'react';

const CartContext = createContext();
const [cart,setCart] = useState([])

export const CartProvider = ({ children }) => {
  const products = initialProducts;


  // add item into the cart

  const addtoCart = (product) =>{
    setCart((prevCart) =>{
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem){
        return prevCart.map((item) =>
          item.id === product.id ? {...item,quantity: item.qunatity + 1 }
        : item
        );
      }else {
        return [...prevCart, {...product, quantity:1}];
      }
    })
  }

  // REMOVE ITEM FORM CART 

  const removeFromCart = (productId, removeAll = false) =>{
    setCart((prevCart) =>{
      const existingItem = prevCart.find((item) => item.id === productId);
      
      if(!existingItem) return prevCart;

      if(removeAll || existingItem.quantity === 1){
        return prevCart.filter((item) => item.id !== productId);
      }else{
        return prevCart.map((item) =>
          item.id === productId ? {...item, quantity: item.quantity - 1} : item
        );
      }
    })
  }

  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((total,item)=> total + item.quantity,0), [cart]);
    

const cartTotal = useMemo(
  () => cart.reduce((total,item) => total + item.price * item.quantity,0),
[cart]
);



  return (
    <CartContext.Provider value={{ products,cart,addtoCart,clearCart,cartTotal,cartCount }}>
        {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);