import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../context/AuthContext';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Header.css';
import { Button } from '@material-ui/core';
import { productsContext } from '../../../context/ProductContext';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUserCheck } from 'react-icons/fa';


const Header = () => {

    // const { productCountInFavorites, favoriteData } = useContext(productsContext)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAdminOpen, setIsAdminOpen] = useState(false)
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')

    // ====================== Admin Open

    function toggleAdminMode() {
        setIsAdminOpen(!isAdminOpen)
    }

    const clickAdminMode = () => {
        toggleAdminMode()
    }

    // ========================= Auth Open

    function toggleAuthMode() {
        setIsAuthOpen(!isAuthOpen)
    }
    const clickHandlerAuth = () => {
        toggleAuthMode()
    }

    // ========================== Menu Open

    function toggleMenuMode() {
        setIsMenuOpen(!isMenuOpen)
    }

    const clickHandlerMenu = () => {
        toggleMenuMode()
    }


    async function handleLogOut() {
        setError('')

        try {
            await logout()
            clickHandlerAuth()
        } catch {
            setError("Failed to log out")
        }
    }

    // console.log(favoriteData.products.length)
    // function reloadWindow() {
    //     window.location.reload()
    // }

    return (
        <>
            <div className="header" >
                <div className="header-container">
                    <Link to="/" style={{ textDecoration: "none" }} >
                        <div className="header-icon">
                            <img className="header-icon-img" src="https://www.pngrepo.com/download/303366/tesla-motors-logo.png" alt="" />
                        </div>
                    </Link>
                    <div className="header-menu">
                        {/* ======================================================= Menu */}
                        <ul className="header-menu-ul">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <li className="header-menu-li" >Home</li>
                            </Link>
                            <Link to="/productList" style={{ textDecoration: "none" }}>
                                <li className="header-menu-li">Cars</li>
                            </Link>
                            <Link to="/contactUs" style={{ textDecoration: "none" }}>
                                <li className="header-menu-li">Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="header-account">
                        {currentUser && currentUser.email ?
                            <AccountCircleIcon
                                style={{ cursor: "pointer", color: "black" }}
                                onClick={clickHandlerAuth} />
                            : <div>
                                <Link to="/signIn" style={{ textDecoration: "none" }} >
                                    <h5>Sign in</h5>
                                </Link>
                                <Link to="/signUp" style={{ textDecoration: "none" }} >
                                    <h5>Sign up</h5>
                                </Link>
                            </div>
                        }
                    </div>
                    {/* ======================================================== Burger Menu */}
                    <div className="header-menu-burger-icon">
                        {isMenuOpen ? <CloseIcon onClick={clickHandlerMenu} />
                            :
                            <MenuIcon onClick={clickHandlerMenu} />
                        }
                    </div>
                </div>
            </div >
            <div className={`header-menu-burger ${isMenuOpen ? "active" : ""}`}>
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li className="burger-header-menu-li" >Home</li>
                    </Link>
                    <Link to="/productList" style={{ textDecoration: "none" }}>
                        <li className="burger-header-menu-li">Cars</li>
                    </Link>
                    <Link to="/contactUs" style={{ textDecoration: "none" }}>
                        <li className="burger-header-menu-li">Contact Us</li>
                    </Link>
                    {currentUser && currentUser.email ?
                        <>
                            <li className="burger-header-menu-li" onClick={clickAdminMode} >Admin {isAdminOpen ? <ChevronRightRoundedIcon /> : <ChevronLeftRoundedIcon />}</li>
                            <div className={`burger-auth-modal-icon ${isAdminOpen ? "active" : ""}`}>
                                <div >
                                    {currentUser && currentUser.email === "admin@admin.com"
                                        ? <FaUserCheck style={{ fontSize: "60px", color: "black" }} />
                                        : <AiOutlineUser style={{ fontSize: "70px", color: "black" }} />}
                                </div>
                                <div className="burger-auth-modal-title">
                                    <p> {currentUser && currentUser.email} </p>
                                </div>
                                <div className="burger-auth-modal-logOut">
                                    <Button variant="outlined" onClick={logout} >
                                        Log Out
                                </Button>
                                </div>
                            </div>
                        </>
                        : <ul>
                            <Link to="/signIn" style={{ textDecoration: "none" }} >
                                <li className="burger-header-menu-li">Sign In</li>
                            </Link>
                            <Link to="/signUp" style={{ textDecoration: "none" }} >
                                <li className="burger-header-menu-li">Sign Up</li>
                            </Link>
                        </ul>
                    }
                </ul>
            </div>
            {/* ========================================== Auth Modal */}
            <div className={`auth-modal ${isAuthOpen ? "active" : ""}`}>
                <div className="auth-modal-icon">
                    {currentUser && currentUser.email === "admin@admin.com"
                        ? <FaUserCheck style={{ fontSize: "60px", color: "black" }} />
                        : <AiOutlineUser style={{ fontSize: "70px", color: "black" }} />}
                </div>
                <div className="auth-modal-title">
                    <p> {currentUser && currentUser.email} </p>
                </div>
                <div className="auth-modal-logOut">
                    <Button variant="outlined" onClick={handleLogOut} >
                        Log Out
                    </Button>
                </div>
                {/* {currentUser && currentUser.email === "admin@admin.com" ?
                    <div className="auth-modal-func">
                        <ul>
                            <Link to="/addProduct" style={{ textDecoration: "none" }}>
                                <li>Add Product</li>
                            </Link>
                        </ul>
                    </div>
                    : null
                } */}
            </div>
        </>
    );
};

export default Header;