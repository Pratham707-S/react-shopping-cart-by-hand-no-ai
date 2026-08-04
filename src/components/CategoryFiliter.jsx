import {  Tag } from "lucide-react"
import { initialProducts } from "../data/data"

const availbleCategrios = [
  'All',...new Set(initialProducts.map(p=>p.category))
]

const CategoryFiliter = () => {

 const selectedCategory = ' '
 return (
  <div className="flex flex-wrap gap-3 m-9 border-b border-gray-800 pb-6">
    <Tag className="w-5 h-5 text-sky-400 mt-2 mr-2 hidden sm:block" />
    
   
    {availbleCategrios.map((category) => (
      <button
        key={category}
        className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md ${
          selectedCategory === category
            ? 'bg-sky-600 text-white shadow-sky-600/50 '
            : 'bg-gray-800 text-gray-400 hover:bg-sky-600 hover:text-white hover:shadow-sky-600/50'
        }`}
      >
        {category}
      </button>
    ))} 
    
    
  </div>
);
};

export default CategoryFiliter