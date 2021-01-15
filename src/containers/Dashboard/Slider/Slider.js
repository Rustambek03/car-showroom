import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { productsContext } from '../../../context/ProductContext';
import './Slider.css'


const Slider = () => {

    const { getSlider, sliderImage } = useContext(productsContext)

    useEffect(() => {
        getSlider()
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }


    return (
        <div >
            <Carousel style={{ zIndex: "0" }} activeIndex={index} onSelect={handleSelect} interval={3500} controls={false}>
                {sliderImage.map(item =>
                    < Carousel.Item key={item.id} >
                        <div className="slider-container">
                            <img
                                src={item.image}
                                alt="First slide"
                            />
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
        </div >
    );
};

export default Slider;