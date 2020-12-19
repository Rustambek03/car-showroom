import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/style.css'
import { productsContext } from '../../context/ProductContext';



const Slider = () => {

    const { getSlider, sliderImage } = useContext(productsContext)

    useEffect(() => {
        getSlider()
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }


    const imageStyle = {
        width: "100%",
        objectFit: "cover",
        maxHeight: "630px",
        zIndex: -1,
        position: "relative"
    }


    return (
        <div >
            <Carousel style={{ zIndex: "1" }} activeIndex={index} onSelect={handleSelect} interval={4000}>
                {sliderImage.map(item =>
                    < Carousel.Item key={item.id} >
                        <div className="slider-container">
                            <img
                                style={imageStyle}
                                src={item.image}
                                alt="First slide"
                            />
                        </div>
                        <Carousel.Caption>
                            <h3 style={{ cursor: "pointer" }} >{item.title}</h3>
                            <p>{item.description} </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div >
    );
};

export default Slider;