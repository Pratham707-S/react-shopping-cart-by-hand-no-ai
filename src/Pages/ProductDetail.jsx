import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../data/data";
import { ChevronLeft, Tag, Zap, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addtoCart } = useCart();

  useEffect(() => {
   
    const foundProduct = initialProducts.find((data) => String(data.id) === String(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="text-white text-center mt-20 text-2xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
      <Link to={'/'}>
        <button className="cursor-pointer flex items-center text-gray-400 hover:text-sky-600 transition duration-150 mb-12 font-semibold text-lg">
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to All Products</span>
        </button>
      </Link> 

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">

        <div className="w-full lg:col-span-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-[400px] h-[400px] object-cover object-center rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800" 
          />
        </div>

     
        <div className="flex flex-col justify-between lg:col-span-4 space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">{product.name}</h1>
            <p className="text-3xl font-extrabold text-sky-400 mb-4">${product.price ? product.price.toFixed(2) : "0.00"}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-200 border-b border-gray-800 pb-2 flex items-center space-x-2">
              <Tag className="w-5 h-5 text-sky-500" />
              <span>Product overview</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed">{product.description || "No description available."}</p>

            <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <li className="flex items-center space-x-3 text-sm">
                <Zap className="w-4 h-4 text-sky-500" />
                <span>High-Quality, Professional Grade Material</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Zap className="w-4 h-4 text-sky-500" />
                <span>Comprehensive 1-year Manufacture Warranty</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Zap className="w-4 h-4 text-sky-500" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>
          </div>

            <div className="space-y-3">
          
              <button 
                onClick={() => addtoCart(product)} 
                className="w-full py-3 bg-sky-600 text-white font-bold rounded-full shadow-lg shadow-sky-800/50 cursor-pointer hover:bg-sky-700 transition duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <Link 
                to={'/'} 
                className="w-full py-3 border-2 border-gray-700 bg-transparent text-gray-300 font-bold rounded-full shadow-md cursor-pointer hover:bg-gray-800 hover:text-white transition duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Keep Shopping</span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;