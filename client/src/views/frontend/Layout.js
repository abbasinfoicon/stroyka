import React from 'react'
import Footer from '../../components/lib/Footer'
import Header from '../../components/lib/Header'
import { Outlet } from 'react-router-dom';
import Index from '../../routes/Index';

const Layout = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <Index/>
            </div>
            <Footer />
        </>
    )
}

export default Layout