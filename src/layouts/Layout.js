import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from '../navigationbar/Navigationbar'
import Footer from '../sections/footer/Footer'
const Layout = () => {
  return (
    <div>
       <Navigationbar/>

        <Outlet/>
        
        <Footer/>
    </div>
  )
}

export default Layout