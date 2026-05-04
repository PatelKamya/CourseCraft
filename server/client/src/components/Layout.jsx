import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Layout