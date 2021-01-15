import { Grid, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import Header from '../Header/Header';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Fade from 'react-reveal/Fade';
import './Order.css';

const Order = (props) => {

    const { getProductDetails, productDetails } = useContext(productsContext)
    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { addToast } = useToasts();
    const history = useHistory();

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [])

    console.log(productDetails)

    // const formatNumber = (x) => {
    //     return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
    // };

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;

    //     setState({ [name]: value });
    // }

    const handleClick = () => {
        history.push('/productList');
        addToast('Thank you for your purchase! We will deliver the car to you within 15 days.', {
            appearance: 'success',
            autoDismiss: true,
        });
    };

    return (
        <>
            <Header />
            <div className="order">
                {productDetails ?
                    <Grid container className="order-content">
                        <Grid item lg={8} md={8} sm={12} xs={12} className="order-content-form">
                            <Fade left>
                                <div className="order-content-form-details">
                                    <div className="order-content-form-details-title">
                                        <h5> Enter Account Details </h5>
                                    </div>
                                    <div className="order-content-form-details-form">
                                        <div className="order-content-form-details-form-input">
                                            <p>First Name*</p>
                                            <TextField
                                                className="order-content-form-details-form-inp"
                                                type="text"
                                                // onChange={(e) => setImage(e.target.value)}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="order-content-form-details-form-input">
                                            <p>Last Name*</p>
                                            <TextField
                                                className="order-content-form-details-form-inp"
                                                type="text"
                                                // onChange={(e) => setImage(e.target.value)}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="order-content-form-details-form-input">
                                            <p>Email Address*</p>
                                            <TextField
                                                className="order-content-form-details-form-inp"
                                                type="text"
                                                // onChange={(e) => setImage(e.target.value)}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="order-content-form-details-form-input">
                                            <p>Phone Number*</p>
                                            <TextField
                                                className="order-content-form-details-form-inp"
                                                type="text"
                                                // onChange={(e) => setImage(e.target.value)}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade left delay={200}>
                                <div className="order-content-form-payment">
                                    <div className="order-content-form-payment-title">
                                        <h5> Payment </h5>
                                    </div>
                                    <div className="order-content-form-payment-content">
                                        <div className="order-content-form-payment-content-inputs">
                                            <div className="order-content-form-payment-content-input">
                                                <p>Card Name*</p>
                                                <TextField
                                                    className="order-content-form-payment-content-inp"
                                                    type="text"
                                                    name="name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    onFocus={handleInputFocus}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div className="order-content-form-payment-content-input">
                                                <p>Card Number*</p>
                                                <TextField
                                                    className="order-content-form-payment-content-inp"
                                                    type="text"
                                                    name="number"
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    onFocus={handleInputFocus}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div className="order-content-form-payment-content-input">
                                                <p>Expiry*</p>
                                                <TextField
                                                    className="order-content-form-payment-content-inp"
                                                    type="text"
                                                    name="expiry"
                                                    onChange={(e) => setExpiry(e.target.value)}
                                                    onFocus={handleInputFocus}
                                                    variant="outlined"
                                                />
                                            </div>
                                            <div className="order-content-form-payment-content-input">
                                                <p>CVC*</p>
                                                <TextField
                                                    className="order-content-form-payment-content-inp"
                                                    type="text"
                                                    name="cvc"
                                                    onChange={(e) => setCvc(e.target.value)}
                                                    onFocus={handleInputFocus}
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                        <div className="order-content-form-payment-content-card">
                                            <Cards
                                                cvc={cvc}
                                                expiry={expiry}
                                                focused={focus}
                                                name={name}
                                                number={number}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="order-content-button">
                                    <button className="order-content-btn" onClick={handleClick}>Order</button>
                                </div>
                            </Fade>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12} className="order-content-product" >
                            <Fade right >
                                <div className="order-content-product-image">
                                    <img src={productDetails.image} alt="" />
                                </div>
                                <div className="order-content-product-title">
                                    <h3> Your {productDetails.title} </h3>
                                    <p>Estimated Delivery: 8-12 weeks</p>
                                </div>
                                <div className="order-content-product-info">
                                    <div className="order-content-product-info-title">
                                        <h4>Specs</h4>
                                    </div>
                                    <ul>
                                        <li>Range: {productDetails.range} km</li>
                                        <li>Drive: {productDetails.driveUnit} </li>
                                        <li>Body: {productDetails.category} </li>
                                        <li>Acceleration: {productDetails.racing}s 0-100 km/h</li>
                                    </ul>
                                </div>
                                <div className="order-content-product-info-price">
                                    <h5>Price: {productDetails.price} $</h5>
                                </div>
                                <div className="order-content-button2">
                                    <button className="order-content-btn2" onClick={handleClick}>Order</button>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>
                    : <h1>Load</h1>
                }
            </div>
        </>
    );
};

export default Order;