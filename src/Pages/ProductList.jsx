import { useState } from "react";
import SearchFilter from "../components/SearchFiliter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../Context/CartContext"; 
import ProductCart from "../components/ProductCart";

const ProductList = () => {
  const { products } = useCart();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase().trim();
    
  
    const matchesSearch = 
      !term || 
      (product.name && product.name.toLowerCase().includes(term)) ||
      (product.category && product.category.toLowerCase().includes(term));
    

    const matchesCategory = 
      selectedCategory === "All" || 
      (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">

       
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
     
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <h2 className="text-2xl font-extrabold mt-8 mb-6 text-white">
          Featured Gear ({filteredProducts.length})
        </h2>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-lg">
            No products found matching your search. 🔍
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product, index) => (
              <ProductCart key={product.id || index} product={product} />
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default ProductList;