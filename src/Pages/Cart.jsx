import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  
  const shippingCost = 0; 
  const estimatedTotal = cartTotal + shippingCost;

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        
        <div className="flex items-center mb-8">
          <Link to={'/'} className="flex items-center text-gray-400 hover:text-sky-400 transition duration-150 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to All Products</span>
          </Link>
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
          Shopping Cart ({cartCount})
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
       
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

         
          <div className="lg:col-span-1 p-6 bg-gray-900 rounded-2xl shadow-2xl border sticky top-20 h-fit border-gray-800">
            <h3 className="text-2xl font-extrabold text-white mb-6 border-b border-gray-800 pb-3">
              ₹ Order Total
            </h3>
            
       
            <div className="flex justify-between items-center text-gray-300 mb-4">
              <span>Subtotal:</span>
              <span className="font-bold text-white">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>


            <div className="flex justify-between items-center text-gray-300 mb-4 pb-4 border-b border-gray-800">
              <span className="text-sm bg-gray-800 px-2 py-1 rounded text-sky-400">Shipping (Express)</span>
              <span className="text-green-400 font-semibold">Free</span>
            </div>

            <div className="flex justify-between items-center text-lg text-white mb-6">
              <span className="font-bold">Estimated Total:</span>
              <span className="text-2xl font-extrabold text-sky-400">
                ₹{estimatedTotal.toFixed(2)}
              </span>
            </div>

    
            <button className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-gray-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 transition duration-300 tracking-wider flex items-center justify-center gap-2 cursor-pointer">
              ⚡ PROCEED SECURELY
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Cart;