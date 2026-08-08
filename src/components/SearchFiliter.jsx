import { Search } from 'lucide-react'

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='my-5 mx-4 md:mx-auto md:max-w-4xl p-2 bg-gray-900 rounded-2xl shadow-xl border border-gray-800'>
      <div className='flex items-center px-4'>
        <Search className='w-5 h-5 text-gray-400 mr-3' />
        <input 
          type="text" 
          value={searchTerm} // Yahan value bind kardi
          onChange={(e) => setSearchTerm(e.target.value)} // Yahan state update hogi
          placeholder="Search high-performance product by name or feature..." 
          className='w-full py-2 bg-transparent text-white outline-none placeholder-gray-500'
        />
      </div>
    </div>
  )
}

export default SearchFilter;