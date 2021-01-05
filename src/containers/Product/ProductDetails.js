import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../context/ProductContext';
import ReactSpeedometer from "react-d3-speedometer";
import CountUp from 'react-countup';
import "./Product.css";
import { Link } from 'react-router-dom';
import EditProduct from './EditProduct';

const ProductDetails = (props) => {

    const { getProductDetails, productDetails, deleteProduct, editProduct } = useContext(productsContext)

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [])

    console.log(productDetails)

    return (
        <>{productDetails ?
            <div className="product-details">
                <div className="product-details-container">
                    <div className="product-details-content">
                        <div className="product-details-image">
                            <img src={productDetails.image} alt="" />
                        </div>
                        <div className="product-details-info">
                            <div className="product-details-price">
                                <h5> {productDetails.price} $</h5>
                            </div>
                            <div className="product-details-category">
                                <p> {productDetails.category} </p>
                            </div>
                            <div className="product-details-description">
                                <p> {productDetails.description1} </p>
                            </div>
                            <div className="product-details-racing">
                                <ReactSpeedometer
                                    maxValue={100}
                                    value={100}
                                    needleColor="black"
                                    forceRender={true}
                                    startColor="black"
                                    segments={10}
                                    endColor="black"
                                    needleTransitionDuration={productDetails.duration}
                                    width={90}
                                    height={90}
                                    needleTransition="easeExpOut"
                                    ringWidth={3}
                                    textColor="red"
                                    currentValueText={""}
                                    needleHeightRatio={0.7}
                                    maxSegmentLabels={0}
                                />
                                <CountUp
                                    // start={}
                                    end={productDetails.racing}
                                    duration={productDetails.racing}
                                    separator=" "
                                    decimals={1}
                                    decimal="."
                                    // prefix="EUR "
                                    suffix="s"
                                />
                                <Link to="/productList">
                                    <button onClick={() => deleteProduct(productDetails.id)}>
                                        Delete
                                    </button>
                                </Link>
                                <Link to="/editProduct">
                                    <button onClick={() => editProduct(productDetails.id)}>
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            : <h1>Loading...</h1>
        }
        </>
    );
};

export default ProductDetails;