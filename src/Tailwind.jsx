import React from 'react'
import './Tailwind.css'
import { FaHome } from "react-icons/fa";
const App = () => {
  return (
    <>

        {/* 0-640px = by default   -- mobile first
        640-768px = sm     -- tablet
        768-1024px = md     -- small laptop
        1024-1280px = lg    -- desktop
        1280-1536px = xl    -- large desktop
        1536px+ = 2xl    -- extra large desktop */}

     

      {/* <h1 className='text-red-500 border-6 text-8xl border-blue-500 p-12 w-3xl m-6 text-center'>hey i am rk</h1> */}
      <nav className='bg-gray-950 text-white flex justify-between p-4 text-2xl list-none'>
        <ul>
         <h1 className='text-4xl ml-6'>Rahul</h1>
         </ul>
         <ul className='hidden sm:flex md:flex gap-8 '>
        <li > <FaHome /> home</li>
        <li>about</li>
        <li>contact</li>
        <li>service</li>
        </ul>
        {/* <button className='bg-amber-300 text-black rounded-2xl p-2  hover:bg-pink-400 hover:border-2 hover:border-amber-50'>sign up</button> */}
        <button className='bg-amber-300 text-black rounded-2xl p-2  hover:bg-blue-400 hover:border-2 hover:border-amber-50'>login</button>
       
      </nav>
      
    </>
  )
}

export default App
