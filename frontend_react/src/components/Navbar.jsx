import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-full'>
<nav className='relative flex-wrap items-center justify-between     '>
  <ul className='flex flex-wrap items-center space-x-4 cursor-pointer justify-center mt-auto p-0 text-semibold bg-gradient-to-r from-purple-500 to bg-pink-600'>
    <Link to='/' className='py-4 px-4 mb-2 text-xl text-white font-semibold'>
      Home
    </Link>
    <Link to='/page1' className='py-4 px-4 mb-2 text-xl text-white font-semibold'>
      Practice page
    </Link>
   
  </ul>
</nav>
    </div>
  )
}

export default Navbar