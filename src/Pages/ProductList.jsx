import SearchFiliter from "../components/SearchFiliter"
import CategoryFiliter from "../components/CategoryFiliter"
import { useCart } from "../Context/CartContext" 
import ProductCart from "../components/ProductCart"

const ProductList = () => {
  const {products} = useCart()
  return (
    <>
    <div className="container mx-auto px-4 md:px-8 pt-8">

    <SearchFiliter/>
    <CategoryFiliter/>


    <h2 className="text-2xl font-extrabold ">Featured Gear ({products.length})</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((product, index) => (
       <ProductCart key={index} product={product}/>
       
      ))}

    </div>
    </div>
    </>
  )
}

export default ProductList