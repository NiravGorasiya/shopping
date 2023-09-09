import React from 'react'
import Product from '../components/products/Product'
import Men from '../components/Men'
import Blog from '../components/Blog/Blog'
import Banner from '../components/Banner/Banner'

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <Men />
            <Blog />
        </div>
    )
}

export default Home