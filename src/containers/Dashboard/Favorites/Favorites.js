import React, { useContext } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Favorites.css';
import { productsContext } from '../../../context/ProductContext';

const Favorites = () => {

    const favorites = JSON.parse(localStorage.getItem("favorites"))

    const { addProductToFavorites, checkItemInFavorites } = useContext(productsContext)

    const handleAddToFavorites = (item) => {
        addProductToFavorites(item)
    }

    return (
        <div className="favorites">
            <div className="favorites-container">
                <div className="favorites-title">
                    <h2> Favorites </h2>
                </div>
                <div className="favorites-content">
                    {favorites.products.map(item => (
                        <div className="favorites-card">
                            <div className="favorites-card-favorites-icon">
                                {checkItemInFavorites(item.product.id) ?
                                    <FavoriteIcon onClick={() => handleAddToFavorites(item.product)} style={{ cursor: "pointer" }} /> :
                                    <FavoriteBorderIcon onClick={() => handleAddToFavorites(item.product)} style={{ cursor: "pointer" }} />
                                }
                                {/* {console.log(item)} */}
                            </div>
                            <div className="favorites-card-content">
                                <Link to={`/productDetails/${item.id}`}>
                                    <div className="favorites-card-image">
                                        <img style={{ width: "100%" }} src={item.product.image} alt="" />
                                    </div>
                                </Link>
                                <div className="favorites-card-info-panel">
                                    <div className="favorites-card-title">
                                        <h2> {item.product.title} </h2>
                                    </div>
                                    <div className="favorites-card-price">
                                        <h5> {item.product.price} $</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;