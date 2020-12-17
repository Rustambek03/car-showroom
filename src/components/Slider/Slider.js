import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/style.css'



const Slider = () => {

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
                <Carousel.Item >
                    <div className="slider-container">
                        <img
                            style={imageStyle}
                            src="https://img.drive.ru/i/0/5e5927aeec05c4db6b000010.jpg"
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-container">
                        <img
                            style={imageStyle}
                            src="https://img.drive.ru/i/0/5e8c3d24ec05c47f06000028.jpg"
                            alt="Second slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-container">
                        <img
                            style={imageStyle}
                            src="https://www.zr.ru/d/story/1b/920091/000.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider-container">
                        <img
                            style={imageStyle}
                            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/19c0333-004-1558012121.jpg"
                            alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;