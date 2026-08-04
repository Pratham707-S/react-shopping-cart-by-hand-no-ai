import { Link } from 'react-router-dom'
import { Home,ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
   <>
  <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-sky-600 p-4">
  <div className="flex items-center justify-between">
    
   
    <Link to={'/'} className="flex items-center space-x-3 cursor-pointer">
      <Home className='w-8 h-8 text-sky-800 drop-shadow-lg'/>
      <h1 className='text-3xl font-extrabold tracking-widest uppercase'>
        KP <span className='text-sky-300'>Store</span>
      </h1>
    </Link>

    
    <nav className='flex items-center space-x-6 mr-10'>
      <Link to={'/cart'} className="hover:text-sky-300 transition-colors ">
        <ShoppingCart className=''/>
      </Link>
      
    </nav>
    
  </div>
</header>
   </>
  )
}

export default Navbar