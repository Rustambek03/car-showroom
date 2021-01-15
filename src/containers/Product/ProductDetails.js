import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../context/ProductContext';
import ReactSpeedometer from "react-d3-speedometer";
import CountUp from 'react-countup';
import "./Product.css";
import { Link } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';
import Footer from '../Dashboard/Footer/Footer';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

const ProductDetails = (props) => {

    const { getProductDetails, productDetails, deleteProduct, editProduct } = useContext(productsContext)

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [])

    console.log(productDetails)

    return (
        <>
            <Header />
            {productDetails ?
                <div className="product-details">
                    <div className="product-details-content">
                        <div className="product-details-image">
                            <img src={productDetails.detailImage} alt="" />
                            <Fade top delay={400}>
                                <div className="product-details-content-onimage-title">
                                    <h1> {productDetails.title} </h1>
                                </div>
                            </Fade>
                            <div className="product-details-content-onimage">
                                <div>
                                    <Fade top delay={400}>
                                        <div className="product-details-racing-speedometer">
                                            <ReactSpeedometer
                                                maxValue={100}
                                                value={100}
                                                needleColor="white"
                                                forceRender={true}
                                                startColor="white"
                                                segments={10}
                                                endColor="white"
                                                needleTransitionDuration={productDetails.duration}
                                                width={80}
                                                height={60}
                                                needleTransition="easeExpOut"
                                                ringWidth={3}
                                                textColor="red"
                                                currentValueText={""}
                                                needleHeightRatio={0.7}
                                                maxSegmentLabels={0}
                                            />
                                            <CountUp
                                                style={{ color: "white", fontSize: "20px" }}
                                                end={productDetails.racing}
                                                duration={productDetails.racing}
                                                separator=" "
                                                decimals={1}
                                                decimal="."
                                                // prefix="EUR "
                                                suffix=" sec"
                                                style={{ color: "white", textShadow: "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)" }}
                                            />
                                        </div>
                                        <div className="product-details-range">
                                            <p> {productDetails.range} <br /> <span style={{ fontSize: "15px", textShadow: "0px 4px 3px rgba(0,0,0,0.4),0px 8px 13px rgba(0,0,0,0.1),0px 18px 23px rgba(0,0,0,0.1)" }}> Range </span>  </p>
                                        </div>
                                        <div className="product-details-driveUnit">
                                            <p> {productDetails.shortDriveUnit} </p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="product-details-order-btn">
                                <Link to={`/order/${productDetails.id}`} >
                                    <button className="order-btn" > Order Now </button>
                                </Link>
                            </div>
                        </div>
                        <Grid container className="product-details-container">
                            <Grid item lg={7} md={6} sm={12} xs={12} className="product-details-content-image">
                                <Fade left>
                                    <img src={productDetails.detailImage2} alt="" />
                                </Fade>
                            </Grid>
                            <Grid item lg={5} md={6} sm={12} xs={12} className="product-details-content-information">
                                <Fade right>
                                    <div className="product-details-content-information-title">
                                        <h2 > {productDetails.title}   <span>Specs </span> </h2>
                                    </div>
                                    <div className="product-details-content-information-specs">
                                        <div className="product-details-content-information-specs-1column">
                                            <div className="product-details-content-information-specs-1column-title">
                                                <h4> Range </h4>
                                                <p> {productDetails.range} km </p>
                                            </div>
                                            <div className="product-details-content-information-specs-1column-title">
                                                <h4> Acceleration </h4>
                                                <p> {productDetails.racing}s 0-100 km/h </p>
                                            </div>
                                            <div className="product-details-content-information-specs-1column-title">
                                                <h4> Seating </h4>
                                                <p> {productDetails.seating} Adults </p>
                                            </div>
                                            <div className="product-details-content-information-specs-1column-title">
                                                <h4> Max Speed </h4>
                                                <p> {productDetails.maxSpeed} km/h </p>
                                            </div>
                                            <div className="product-details-content-information-specs-1column-title">
                                                <h4> Wheels </h4>
                                                <p> {productDetails.wheels}" </p>
                                            </div>
                                        </div>
                                        <div className="product-details-content-information-specs-2column">
                                            <div className="product-details-content-information-specs-2column-title">
                                                <h4> Weight </h4>
                                                <p> {productDetails.weight} kg </p>
                                            </div>
                                            <div className="product-details-content-information-specs-2column-title">
                                                <h4> Body </h4>
                                                <p> {productDetails.category} </p>
                                            </div>
                                            <div className="product-details-content-information-specs-2column-title">
                                                <h4> Drive </h4>
                                                <p> {productDetails.driveUnit} </p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </Grid>
                        </Grid>
                        <Grid container className="product-details-experience">
                            <Grid item lg={6} md={6} sm={12} xs={12} className="product-details-experience-order">
                                <Fade bottom>
                                    <div className="product-details-experience-order-title">
                                        <h2> Experience {productDetails.title} </h2>
                                    </div>
                                    <div className="product-details-experience-order-buttons">
                                        <Link to={`/order/${productDetails.id}`} style={{ textDecoration: "none" }}>
                                            <button className="product-details-experience-order-btn">
                                                Order Now
                                            </button>
                                        </Link>
                                        <Link to={`/testDrive/${productDetails.id}`} style={{ textDecoration: "none" }}>
                                            <button className="product-details-experience-order-btn">
                                                Test Drive
                                            </button>
                                        </Link>
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className="product-details-experience-image">
                                <Fade bottom>
                                    <div>
                                        <img src={productDetails.detailImage3} alt="" />
                                    </div>
                                </Fade>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                : <h1>Loading...</h1>
            }
            {/* <Footer /> */}
        </>
    );
};

export default ProductDetails;