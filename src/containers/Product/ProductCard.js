import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useContext } from 'react';
import './Product.css';
import { productsContext } from '../../context/ProductContext';

const ProductCard = ({ item }) => {

    const { addProductToFavorites, checkItemInFavorites } = useContext(productsContext)

    const handleAddToFavorites = (item) => {
        addProductToFavorites(item)
    }

    return (
        <div className="productCard">
            <div className="productCard-container">
                <div className="productCard-favorites-icon">
                    {checkItemInFavorites(item.id) ?
                        <FavoriteIcon onClick={() => handleAddToFavorites(item)} style={{ cursor: "pointer" }} /> :
                        <FavoriteBorderIcon onClick={() => handleAddToFavorites(item)} style={{ cursor: "pointer" }} />
                    }
                </div>
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
                            <h5> {item.price} $</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;