import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {

    const { getSlider, sliderImage } = useContext(productsContext)

    useEffect(() => {
        getSlider()
    }, [])


    return (
        <div >
            <Carousel
                autoPlay={true}
                interval={5000}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                showArrows={false}
            >
                {sliderImage.map(item => (
                    <div className="slider-container">
                        <img src={item.image} />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                ))}
            </Carousel>
        </div >
    );
};

export default Slider;