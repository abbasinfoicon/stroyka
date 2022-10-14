import React from 'react'
import { Routes, Route, } from "react-router-dom";
import Layout from '../views/frontend/Layout';
import Home from '../views/frontend/Home';

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Index