import { useState } from "react"

const CartItem = ({item}) => {
  const {addtoCart, removeFromCart} = useCart()

  const increseQuantity = () => 
    addtoCart(item);
    const decreseQuantity = () => 
      removeFromCart(item.id);
    
  return (
    <div className="flex flex-col">

    </div>
  )

}
export default CartItem