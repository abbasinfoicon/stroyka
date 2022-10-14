import React from 'react'
import Footer from '../../components/lib/Footer'
import Header from '../../components/lib/Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout