import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <div style={{ minHeight: "70px", boxShadow: "0 0 15px rgba(0,0,0,2)", backgroundColor: "#333333", overflow: "hidden", position: "fixed", width: "100%", zIndex: "2" }} >
            <div style={{ margin: "0 70px", minHeight: "70px", display: "flex", justifyContent: "space-between", }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ul style={{ color: "white", marginBottom: "0px", listStyleType: "none", display: "flex", justifyContent: "flex-start", }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <li style={{ color: "white" }} >Home</li>
                        </Link>
                        <li>About Us</li>
                        <Link to="/productList" style={{ textDecoration: "none" }}>
                            <li style={{ color: "white" }} >Cars</li>
                        </Link>
                        <li>Test Drive</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <a href="">
                        <img style={{ width: "20px" }} src="https://image.flaticon.com/icons/png/512/61/61045.png" alt="" />
                    </a>
                    <a href="">
                        <img style={{ width: "20px", margin: "0 10px 0 10px" }} src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="" />
                    </a>
                    <a href="">
                        <img style={{ width: "20px" }} src="https://image.flaticon.com/icons/png/512/60/60580.png" alt="" />
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Header;