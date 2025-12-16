import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import './Tailwind.css'

const Layout2 = () => {
  return (
    <>
      <header className='bg-blue-300 text-black flex justify-between p-4 text-xl list-none'>
        <h1 className='text-5xl ml-20'>logo</h1>
        <ul className='flex justify-around gap-20 mr-20'>
            <li>  <Link to='/home'> Home</Link>  </li>
            <li>  <Link to='/about'> About</Link>  </li>
            <li>  <Link to='/service'> Service</Link>  </li>
            <li>  <Link to='/signup'> Signup</Link>  </li>
            <li>  <Link to='/login1'> login</Link>  </li>
        </ul>
      </header>

      {/* component will rander here */}
          <Outlet/>

      <footer className='bg-blue-300 text-black flex items-center justify-center h-20 text-4xl list-none'> 
        <h1>this is footer</h1>
        </footer>
    </>
  )
}

export default Layout2
