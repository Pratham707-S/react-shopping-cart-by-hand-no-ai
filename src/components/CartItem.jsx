import { useCart } from "../Context/CartContext"; // 1. Yahan useCart import kar liya
import { Plus, Minus, Trash2 } from "lucide-react"; // Icons for buttons

const CartItem = ({ item }) => {
  const { addtoCart, removeFromCart } = useCart();

  const increaseQuantity = () => {
    addtoCart(item);
  };

  const decreaseQuantity = () => {
    removeFromCart(item.id, false); // Ek-ek quantity kam karne ke liye
  };

  const removeItemCompletely = () => {
    removeFromCart(item.id, true); // Poora item hatane ke liye
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 mb-4 bg-gray-900 rounded-xl border border-gray-800 transition duration-300 hover:border-sky-600/50 gap-4">
      
      {/* Left: Image & Name */}
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-lg border border-gray-700 flex-shrink-0" 
        />
        <div>
          <h4 className="text-white font-bold text-lg line-clamp-1">{item.name}</h4>
          <p className="text-sky-400 font-semibold">${item.price ? item.price.toFixed(2) : "0.00"}</p>
        </div>
      </div>

    
      <div className="flex items-center justify-between w-full sm:w-auto space-x-6">
        
       
        <div className="flex items-center bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
          <button 
            onClick={decreaseQuantity}
            className="px-3 py-1 text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="px-4 py-1 text-white font-bold">{item.quantity}</span>
          
          <button 
            onClick={increaseQuantity}
            className="px-3 py-1 text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

       
        <button 
          onClick={removeItemCompletely}
          className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-500/10 transition cursor-pointer"
          title="Remove Item"
        >
          <Trash2 className="w-5 h-5" />
        </button>

      </div>

    </div>
  );
};

export default CartItem;