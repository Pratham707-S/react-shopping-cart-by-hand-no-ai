import { Tag } from "lucide-react"
import { initialProducts } from "../data/data"

const availableCategories = [
  'All', ...new Set(initialProducts.map(p => p.category))
]

const CategoryFiliter = ({ selectedCategory, setSelectedCategory }) => {
  return (
   
   <div className="flex flex-wrap items-center justify-start gap-3 my-6 border-b border-gray-800 pb-6 px-4">
     <Tag className="w-5 h-5 text-sky-400 hidden sm:block" />
     
     {availableCategories.map((category) => (
       <button
         key={category}
         onClick={() => setSelectedCategory(category)}
         className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md cursor-pointer ${
           selectedCategory === category
             ? 'bg-sky-600 text-white shadow-sky-600/50 scale-105'
             : 'bg-gray-800 text-gray-400 hover:bg-sky-600 hover:text-white hover:shadow-sky-600/50'
         }`}
       >
         {category}
       </button>
     ))} 
   </div>
 );
 };

export default CategoryFiliter;