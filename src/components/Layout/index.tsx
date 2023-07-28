import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from '../Header'

export const Layout = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <Outlet />
            <footer>footer</footer>
        </div>
    )
}
