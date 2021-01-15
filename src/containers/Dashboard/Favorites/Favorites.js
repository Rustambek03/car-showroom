import React, { useContext } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Favorites.css';
import { productsContext } from '../../../context/ProductContext';
import Header from '../Header/Header';
import Fade from 'react-reveal/Fade';

const Favorites = () => {

    const favorites = JSON.parse(localStorage.getItem("favorites"))

    const { addProductToFavorites, checkItemInFavorites } = useContext(productsContext)

    const handleAddToFavorites = (item) => {
        addProductToFavorites(item)
    }

    console.log(favorites)

    return (
        <>
            <Header />
            <div className="favorites">
                <div className="favorites-container">
                    <div className="favorites-title">
                        <h2> Favorites </h2>
                    </div>
                    <div className="favorites-content">
                        {favorites.products.map(item => (
                            <Fade bottom key={item.product.id}>
                                <div className="favorites-card" >
                                    <div className="productCard-container">
                                        <div className="productCard-icons">
                                            <div className="productCard-icons-title">
                                                <p>Спецпредложение</p>
                                            </div>
                                            <div className="productCard-top-icons">
                                                <div className="productCard-admin-icons">
                                                </div>
                                                <div className="productCard-favorites-icons">
                                                    {checkItemInFavorites(item.product.id) ?
                                                        <FavoriteBorderIcon onClick={() => handleAddToFavorites(item.product)} style={{ cursor: "pointer" }} /> :
                                                        <FavoriteBorderIcon onClick={() => handleAddToFavorites(item.product)} className="productCard-favorites-icon" />
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                        <div className="productCard-content">
                                            <Link to={`/productDetails/${item.product.id}`}>
                                                <div className="productCard-image">
                                                    <img src={item.product.image} alt="" />
                                                </div>
                                            </Link>
                                            <div className="productCard-info-panel">
                                                <div className="productCard-title">
                                                    <p> {item.product.title} </p>
                                                </div>
                                                <div className="productCard-information">
                                                    <p> {item.product.range} km · {item.product.racing} sec · {item.product.shortDriveUnit}</p>
                                                </div>
                                                <div className="productCard-price">
                                                    <h5> {item.product.price} $</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Favorites;