import { Link } from 'react-router-dom';
import React from 'react';

const ProductCard = ({ item }) => {
    return (
        <div className="productCard">
            <div className="productCard-container">
                <div className="productCard-content">
                    <Link to={`/productDetails/${item.id}`}>
                        <div className="productCard-image">
                            <img style={{ width: "100%" }} src={item.image} alt="" />
                        </div>
                    </Link>
                    <div className="productCard-info-panel">
                        <div className="productCard-title">
                            <h2> {item.title} </h2>
                        </div>
                        <div className="productCard-price">
                            <h5> {item.price} </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;