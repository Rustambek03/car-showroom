import React, { useState } from 'react';
import useAuth from '../../../context/AuthContext';
import Slider from '../Slider/Slider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './HomePage.css'
import { Button, Grid } from '@material-ui/core';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

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
                            <img src="" alt="" />
                        </div>
                        <div className="home-page-account">
                            {currentUser && currentUser.email ?
                                <AccountCircleIcon
                                    style={{ cursor: "pointer", marginRight: "20px", color: "#f2f2f2" }}
                                    onClick={clickHandler} />
                                : null
                                // : <div>
                                //     <Link to="/signIn" style={{ textDecoration: "none" }} >
                                //         <h5 className="home-page-account-signin">Sign in</h5>
                                //     </Link>
                                //     <Link to="/signUp" style={{ textDecoration: "none" }} >
                                //         <h5 className="home-page-account-signup">Sign up</h5>
                                //     </Link>
                                // </div>
                            }
                        </div>
                    </div>
                </div>
                <Grid container className="home-page-menu">
                    <Grid item md={4} sm={4} xs={8} className="home-page-menu-content">
                        <ul className="home-page-menu-ul">
                            <Fade top delay={100}>
                                <div className="home-page-ad-title">
                                    <h5> Future is <br /> already here </h5>
                                </div>
                            </Fade>
                            <Fade left delay={400}>
                                <Link to="/productList" style={{ textDecoration: "none" }}>
                                    <li className="home-page-menu-li">Cars in stock</li>
                                </Link>
                            </Fade>

                            <Fade left delay={600}>
                                <Link to="/signIn" style={{ textDecoration: "none" }} >
                                    <h5 className="home-page-menu-li">Sign in</h5>
                                </Link>
                            </Fade>
                            <Fade left delay={800}>
                                <Link to="/signUp" style={{ textDecoration: "none" }} >
                                    <h5 className="home-page-menu-li">Sign up</h5>
                                </Link>
                            </Fade>
                            <Fade left delay={1000}>
                                <Link to="/contactUs" style={{ textDecoration: "none" }} >
                                    <li className="home-page-menu-li">Contact Us</li>
                                </Link>
                            </Fade>
                            {currentUser && currentUser.email ?
                                <Fade left delay={1200}>
                                    <Link to="/addProduct" style={{ textDecoration: "none" }}>
                                        <li className="home-page-menu-li">Add Product</li>
                                    </Link>
                                </Fade>
                                : null
                            }
                        </ul>
                    </Grid>
                </Grid>
                <div className={`home-page-modal ${isMenuOpen ? "active" : ""}`}>
                    <div className="home-page-modal-icon">
                        {currentUser && currentUser.email === "admin@admin.com"
                            ? <FaUserCheck style={{ fontSize: "60px", color: "black" }} />
                            : <AiOutlineUser style={{ fontSize: "70px", color: "black" }} />}
                    </div>
                    <div className="home-page-modal-title">
                        <p> {currentUser && currentUser.email} </p>
                    </div>
                    <div className="home-page-modal-logOut">
                        <Button variant="outlined" onClick={handleLogOut} >
                            Log Out
                    </Button>
                    </div>
                    {/* {currentUser && currentUser.email === "admin@admin.com" ?
                        <div className="home-page-modal-func">
                            <ul>

                            </ul>
                        </div>
                        : null
                    } */}
                </div>
            </div>
            <Slider />
        </>
    );
};

export default HomePage;