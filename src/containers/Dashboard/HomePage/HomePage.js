import React, { useState } from 'react';
import useAuth from '../../../context/AuthContext';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import ProductListInHomePage from '../../Product/ProductListInHomePage';
// import ProductType from '../ProductType/ProductType';
import Slider from '../Slider/Slider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './HomePage.css'
import { Button } from '@material-ui/core';

const HomePage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()

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

    return (
        <>
            <div className="HomePage">
                <div className="home-page">
                    <div className="home-page-container">
                        <div className="home-page-title">
                            <img src="https://lh3.googleusercontent.com/proxy/MRw_6LW7pUhP3mPhYHgSd2caS22DJw31IBUbUT6sGDVvJG4Eda8enA-rX7xyNQ5ORNF1gX6OTp7ZX6pgOuqbm9ULPgw" alt="" style={{ width: "150px", height: "100px", objectFit: "cover" }} />
                        </div>
                        <div className="home-page-account">
                            {currentUser && currentUser.email ?
                                <AccountCircleIcon
                                    style={{ cursor: "pointer", marginRight: "20px", color: "#f2f2f2" }}
                                    onClick={clickHandler} />
                                : <div>
                                    <Link to="/signIn" style={{ textDecoration: "none" }}>
                                        <h5 className="home-page-account-signin">Sign in</h5>
                                    </Link>
                                    <Link to="/signUp" style={{ textDecoration: "none" }}>
                                        <h5 className="home-page-account-signup">Sign up</h5>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="home-page-menu">
                    <div className="home-page-menu-content">
                        <ul className="home-page-menu-ul">
                            <Link to="/productList" style={{ textDecoration: "none" }}>
                                <li className="home-page-menu-li">Cars in stock</li>
                            </Link>
                            <li className="home-page-menu-li">Test Drive</li>
                            <li className="home-page-menu-li">About Us</li>
                            <li className="home-page-menu-li">Contact Us</li>
                            <li className="home-page-menu-li"></li>
                        </ul>
                    </div>
                </div>
                <div className={`home-page-modal ${isMenuOpen ? "active" : ""}`}>
                    <div className="home-page-modal-icon">
                        <AccountCircleIcon style={{ fontSize: "100px" }} />
                    </div>
                    <div className="home-page-modal-title">
                        <p> {currentUser && currentUser.email} </p>
                    </div>
                    <div className="home-page-modal-logOut">
                        <Button variant="outlined" onClick={handleLogOut} >
                            Log Out
                    </Button>
                    </div>
                </div>
            </div>
            <Slider />
        </>
    );
};

export default HomePage;