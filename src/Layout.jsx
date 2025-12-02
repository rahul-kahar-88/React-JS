import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>  
        </ul>
      </header>
  <hr />
        {/* chiLd component  render hoga yha par */}

      <Outlet />

<hr />

      <h1>Footer Section</h1>
    </>
  )
}

export default Layout
