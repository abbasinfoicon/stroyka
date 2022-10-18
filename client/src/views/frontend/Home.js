import React from 'react'
import Banner from '../../components/blocks/home/Banner'
import BestSale from '../../components/blocks/home/BestSale'
import Brands from '../../components/blocks/home/Brands'
import Features from '../../components/blocks/home/Features'
import HighLight from '../../components/blocks/home/HighLight'
import NewArrival from '../../components/blocks/home/NewArrival'
import Posts from '../../components/blocks/home/Posts'
import FeaturedProducts from '../../components/blocks/home/FeaturedProducts'
import RatedProduct from '../../components/blocks/home/RatedProduct'
import Slider from '../../components/blocks/home/Slider'

const Home = () => {
    return (
        <div className="site__body">
            <Slider />

            <Features />

            <FeaturedProducts />

            <Banner />

            <BestSale />

            <HighLight />

            <NewArrival />

            <Posts />

            <Brands />

            <RatedProduct />
        </div>
    )
}

export default Home