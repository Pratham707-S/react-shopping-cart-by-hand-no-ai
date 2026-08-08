import { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, CheckCircle2, ShieldCheck } from "lucide-react";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "COD", // Default Cash on Delivery
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone || !formData.pincode) {
      alert("Please fill in all required shipping fields!");
      return;
    }
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white max-w-lg bg-gray-900 rounded-2xl border border-gray-800 my-12 shadow-2xl">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-3xl font-extrabold mb-2">Order Placed Successfully! 🎉</h2>
        <p className="text-gray-400 mb-6">Thank you for shopping with P Store. Your order will be delivered soon.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-full transition cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 max-w-5xl">
      <Link to={'/cart'} className="flex items-center text-gray-400 hover:text-sky-400 transition mb-6 font-semibold">
        <ChevronLeft className="w-5 h-5 mr-1" />
        <span>Back to Cart</span>
      </Link>

      <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">Checkout Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Shipping Form (Takes 2 Columns) */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-800 space-y-6">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>📍</span> Shipping Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Pratham " 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Pratham@example.com" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Street Address *</label>
                <textarea 
                  name="address" 
                  required
                  rows="2"
                  value={formData.address} 
                  onChange={handleChange}
                  placeholder="House No, Building Name, Street" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-1">City *</label>
                  <input 
                    type="text" 
                    name="city" 
                    required
                    value={formData.city} 
                    onChange={handleChange}
                    placeholder="Mumbai" 
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">State *</label>
                  <input 
                    type="text" 
                    name="state" 
                    required
                    value={formData.state} 
                    onChange={handleChange}
                    placeholder="Maharashtra" 
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1">Pincode *</label>
                  <input 
                    type="text" 
                    name="pincode" 
                    required
                    value={formData.pincode} 
                    onChange={handleChange}
                    placeholder="400001" 
                    className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-1">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="9876543210" 
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="border-t border-gray-800 pt-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span>💳</span> Payment Method
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition ${formData.paymentMethod === 'COD' ? 'border-sky-500 bg-sky-950/30' : 'border-gray-800 bg-gray-800/50'}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="COD" 
                  checked={formData.paymentMethod === 'COD'} 
                  onChange={handleChange}
                  className="text-sky-500 focus:ring-sky-500"
                />
                <span className="text-white font-medium">Cash on Delivery (COD)</span>
              </label>

              <label className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition ${formData.paymentMethod === 'Online' ? 'border-sky-500 bg-sky-950/30' : 'border-gray-800 bg-gray-800/50'}`}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="Online" 
                  checked={formData.paymentMethod === 'Online'} 
                  onChange={handleChange}
                  className="text-sky-500 focus:ring-sky-500"
                />
                <span className="text-white font-medium">Online Payment / UPI</span>
              </label>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-gray-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 transition duration-300 cursor-pointer text-lg tracking-wider"
          >
            ⚡ PLACE ORDER (₹{cartTotal.toFixed(2)})
          </button>
        </form>

        {/* Order Summary Sidebar (Takes 1 Column) */}
        <div className="lg:col-span-1 bg-gray-900 p-6 rounded-2xl border border-gray-800 h-fit sticky top-20">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-3">Order Summary</h3>
          
          <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm text-gray-300">
                <span className="line-clamp-1">{item.name} <span className="text-sky-400 font-bold">({item.quantity})</span></span>
                <span className="font-semibold text-white">₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-4 space-y-2 mb-4 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-400 font-semibold">Free</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex justify-between items-center text-lg font-bold text-white mb-6">
            <span>Total:</span>
            <span className="text-sky-400 text-2xl">₹{cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-800/50 p-3 rounded-lg border border-gray-800">
            <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>Safe and Secure Checkout. 100% Authentic Products.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;