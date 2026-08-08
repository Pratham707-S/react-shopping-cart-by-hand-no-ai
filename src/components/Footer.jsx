import { ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] text-gray-400 border-t border-gray-800 mt-20 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-sky-500" />
            <span className="text-xl font-extrabold text-white tracking-wide">KP STORE</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Your ultimate destination for high-performance gear, latest smartphones, laptops, and professional accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-sky-400 transition duration-150">Home / Products</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-sky-400 transition duration-150">Shopping Cart</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Categories</h3>
          <ul className="space-y-2.5 text-sm">
            <li><span className="text-gray-400">Laptops</span></li>
            <li><span className="text-gray-400">Smartphones</span></li>
            <li><span className="text-gray-400">Cameras</span></li>
            <li><span className="text-gray-400">Tablets</span></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold text-base mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-4">Subscribe for the latest tech gear releases.</p>
          <div className="flex items-center bg-gray-900 border border-gray-800 rounded-xl p-1">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent px-3 py-1.5 text-sm text-white outline-none w-full placeholder-gray-500"
            />
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-1.5 text-sm font-semibold rounded-lg transition cursor-pointer">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 md:px-8 border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© 2026 KP STORE. All rights reserved.</p>
        <p className="flex items-center space-x-1 mt-3 sm:mt-0">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-0.5" />
          <span>by Pratham</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;