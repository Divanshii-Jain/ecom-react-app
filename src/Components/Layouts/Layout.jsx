import React from 'react'
import Header from '../Pages/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <div>
        <Outlet />
    </div>
    </>
    
  )
}

export default Layout