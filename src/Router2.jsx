import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout2 from './layout2'
import Home from './Home'
import About from './About'
import Service from './Service'
import Signup from './Signup'

const Router2 = () => {
  return (
    <>
      {/* <h1>hey</h1> */}

      <Routes>
           
           <Route path='/' element={<Layout2/>}>  
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='*' element={ <h1 className='h-196.25 bg-lime-200'> 404 Not Found </h1>} />
            
           </Route>


      </Routes>

    </>
  )
}

export default Router2
