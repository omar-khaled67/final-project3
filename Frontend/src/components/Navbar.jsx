import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex items-center justify-between h-[100px] px-[200px]'>

     <img src="/logo1.png" alt="" height={200} width={200} className='cursor-pointer'/>

     <div className='flex items-center justify-evenly cursor-pointer'>
      <Link to="/" className="mr-3 text-[18px] font-medium">Home</Link>
      <Link to="/featured" className="mr-3 text-[18px] font-medium">About Us</Link>
      <Link to="/contact" className="mr-3 text-[18px] font-medium">Contact Us</Link>
      
     </div>
     <div>
      <Link to="/login" className="mr-3 text-[18px] font-medium"><button className="bg-red-500 p-[10px] w-[100px] rounded-md text-white  cursor-pointer">Login</button></Link>
      <Link to="/register" className="mr-3 text-[18px] font-medium"><button className="bg-gray-500 p-[10px] w-[100px] rounded-md text-white  cursor-pointer">Register</button></Link>
      </div>

    </div>
  )
}

export default Navbar
