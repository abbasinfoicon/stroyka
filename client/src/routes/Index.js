import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Layout from '../views/frontend/Layout'
import Home from '../views/frontend/Home'
import About from '../views/frontend/About';
import Products from '../views/frontend/Products';
import Blog from '../views/frontend/Blog';
import Gallery from '../views/frontend/Gallery';
import Contact from '../views/frontend/Contact';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default Index