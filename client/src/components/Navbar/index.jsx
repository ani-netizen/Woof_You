import React from 'react'

function Navbar() {
  return (
    <>
    <div className="flex justify-between items-center px-10 py-5 w-full shadow-md sticky top-0 z-50 bg-slate-50">
      <div className='flex gap-20'>
      <div className="w-20 h-15 bg-amber-300">
        logo
      </div>
      <ul className='flex gap-5'>
        <li>News</li>
        <li>Contact Us</li>
      </ul>
      </div>
      <div>
        <a href="#">Login/Signup</a>
      </div>
    </div>
    </>
    
  )
}

export default Navbar