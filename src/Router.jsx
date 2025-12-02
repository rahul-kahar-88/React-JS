import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Footer from './Footer.jsx'

const Router = () => {
  return (
    <>
      {/* main.jsx               ==>  <BrowserRouter></BrowserRouter> */}
      {/* (App.jsx) Router.jsx   ==>  Routes , Route */}
      {/* Layout.jsx             ==>  Outlet , Link  */}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Footer />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
