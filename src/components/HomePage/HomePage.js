import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductListInHomePage from '../Product/ProductListInHomePage';
import ProductType from '../ProductType/ProductType';
import Slider from '../Slider/Slider';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Slider />
            <ProductListInHomePage />
            <ProductType />
            <Footer />
        </div>
    );
};

export default HomePage;