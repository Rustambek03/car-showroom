import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/AuthContext';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';
import { Badge, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { productsContext } from '../../../context/ProductContext';

const Header = () => {

    const { productCountInFavorites, favoriteData } = useContext(productsContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')

    function toggleMenuMode() {
        setIsMenuOpen(!isMenuOpen)
    }

    const clickHandler = () => {
        toggleMenuMode()
    }

    async function handleLogOut() {
        setError('')

        try {
            await logout()
            clickHandler()
        } catch {
            setError("Failed to log out")
        }
    }

    // console.log(favoriteData.products.length)

    return (
        <>
            <div className="header" >
                <div className="header-container">
                    <div className="header-icon">
                        <img className="header-icon-img" src="https://www.pngrepo.com/download/303366/tesla-motors-logo.png" alt="" />
                    </div>
                    <div className="header-menu">
                        <ul className="header-menu-ul">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <li className="header-menu-li" >Home</li>
                            </Link>
                            <li className="header-menu-li">About Us</li>
                            <Link to="/productList" style={{ textDecoration: "none" }}>
                                <li className="header-menu-li">Cars</li>
                            </Link>
                            <li className="header-menu-li">Test Drive</li>
                            <li className="header-menu-li">Contact Us</li>
                        </ul>
                    </div>
                    <div className="header-favorites">
                        <Link to="/favorites" style={{ textDecoration: "none" }} >
                            <Badge badgeContent={productCountInFavorites} style={{ color: "black" }}>
                                < FavoriteIcon style={{ cursor: "pointer", color: "black" }} />
                            </Badge>
                        </Link>
                    </div>
                    <div className="header-account">
                        {currentUser && currentUser.email ?
                            <AccountCircleIcon
                                style={{ cursor: "pointer" }}
                                onClick={clickHandler} />
                            : <div>
                                <Link to="/signIn" style={{ textDecoration: "none" }}>
                                    <h5>Sign in</h5>
                                </Link>
                                <Link to="/signUp" style={{ textDecoration: "none" }}>
                                    <h5>Sign up</h5>
                                </Link>
                            </div>
                        }
                    </div>
                    {/* <div className={`header-burger-btn ${isMenuOpen ? "active" : ""}`} onClick={clickHandler}>
                        <span></span>
                    </div> */}
                </div>
            </div >
            <div className={`auth-modal ${isMenuOpen ? "active" : ""}`}>
                <div className="auth-modal-icon">
                    <AccountCircleIcon style={{ fontSize: "100px" }} />
                </div>
                <div className="auth-modal-title">
                    <p> {currentUser && currentUser.email} </p>
                </div>
                <div className="auth-modal-logOut">
                    <Button variant="outlined" onClick={handleLogOut} >
                        Log Out
                    </Button>
                </div>
            </div>
            {/* <div className={`auth-modal ${isMenuOpen ? "active" : ""}`}>
                <ul className="burger-menu-ul">
                    <li className="burger-menu-li">Test Drive</li>
                    <li className="burger-menu-li">Contact Us</li>
                    <li className="burger-menu-li">Test Drive</li>
                    <li className="burger-menu-li">Contact Us</li>
                    <li className="burger-menu-li">Test Drive</li>
                    <li className="burger-menu-li">Contact Us</li>
                </ul>
            </div> */}
        </>
    );
};

export default Header;