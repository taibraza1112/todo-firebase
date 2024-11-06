import React from 'react'
import { Outlet } from 'react-router-dom'
import ColorSchemesExample from './components/Navbar.jsx'


function Layout() {
  return (
        <>  
        <ColorSchemesExample/>
        <Outlet/>

        </>  
)
}

export default Layout