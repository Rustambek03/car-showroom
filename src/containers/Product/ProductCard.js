import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useContext } from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './Product.css';
import { productsContext } from '../../context/ProductContext';
import useAuth from '../../context/AuthContext';
import MenuIcon from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';

const ProductCard = ({ item }) => {

    const { addProductToFavorites, checkItemInFavorites, deleteProduct, editProduct } = useContext(productsContext)
    const { currentUser } = useAuth()

    const handleAddToFavorites = (item) => {
        addProductToFavorites(item)
    }

    let mortgagePrice = item.price / 24

    console.log(mortgagePrice)

    return (
        <Fade bottom>
            <div className="productCard">
                <div className="productCard-container">
                    <div className="productCard-icons">
                        <div className="productCard-icons-title">
                            <p>Спецпредложение</p>
                        </div>
                        <div className="productCard-top-icons">
                            <div className="productCard-admin-icons">
                                {currentUser && currentUser.email === "admin@admin.com" ?
                                    <>
                                        <div className="productCard-menu-icon">
                                            <MenuIcon />
                                            <div className="productCard-edit-icons">
                                                <Link to={`/editProduct/${item.id}`}>
                                                    <EditOutlinedIcon style={{ margin: "1px 5px", cursor: "pointer", color: "black", width: "20px" }} onClick={() => editProduct(item.id)} />
                                                </Link>
                                                <DeleteOutlineIcon style={{ margin: "1px 5px", cursor: "pointer", color: "black", width: "20px" }} onClick={() => deleteProduct(item.id)} />
                                            </div>
                                        </div>
                                    </>
                                    : null
                                }
                            </div>
                            <div className="productCard-favorites-icons">
                                {checkItemInFavorites(item.id) ?
                                    <FavoriteBorderIcon onClick={() => handleAddToFavorites(item)} style={{ cursor: "pointer" }} /> :
                                    <FavoriteBorderIcon onClick={() => handleAddToFavorites(item)} className="productCard-favorites-icon" />
                                }
                            </div>
                        </div>

                    </div>
                    <div className="productCard-content">
                        <Link to={`/productDetails/${item.id}`}>
                            <div className="productCard-image">
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className="productCard-info-panel">
                            <div className="productCard-title">
                                <p> {item.title} </p>
                            </div>
                            <div className="productCard-information">
                                <p> {item.range} km · {item.racing} sec · {item.shortDriveUnit}</p>
                            </div>
                            <div className="productCard-mortgage">
                                <p> From {Math.round(mortgagePrice)} $ per month </p>
                            </div>
                            <div className="productCard-price">
                                <h5> {item.price} $</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Fade>
    );
};

export default ProductCard;