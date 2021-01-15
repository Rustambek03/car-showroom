import { Grid } from '@material-ui/core';
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <Grid container className="footer-container-top">
                <Grid item md={6} className="footer-container-top-content">
                    <h3>About Us</h3>
                    <div className="footer-container-top-address">
                        <img style={{ width: "35px", marginRight: "15px" }} src="https://image.flaticon.com/icons/png/512/126/126103.png" alt="" />
                        <a href="tel: 0777 77 77 77" style={{ color: "white", textDecoration: "none" }}>+996 777 77 77 77</a>
                    </div>
                    <div className="footer-container-top-address">
                        <img style={{ width: "35px", marginRight: "15px" }} src="https://image.flaticon.com/icons/png/512/126/126516.png" alt="" />
                        <a href="tel: 0777 77 77 77" style={{ color: "white", textDecoration: "none" }}>electricCar@gmail.com</a>
                    </div>
                    <div className="footer-container-top-address">
                        <img style={{ width: "35px", marginRight: "15px" }} src="https://image.flaticon.com/icons/png/512/121/121383.png" alt="" />
                        <a href="tel: 0777 77 77 77" style={{ color: "white", textDecoration: "none" }}>Isanova 105/3, Bishkek</a>
                    </div>
                </Grid>
                <Grid item md={6} className="footer-container-top-content">
                    <h3>Quick Links</h3>
                </Grid>
            </Grid>
            <Grid container style={{ backgroundColor: "rgb(41 41 41)", height: "100px", }}>
                <Grid item md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ marginBottom: "0px", color: "#6f6f6f" }}>© 2020 Car Showroom. All rights reserved</p>
                </Grid>
                <Grid item md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a href="">
                        <img style={{ width: "20px" }} src="https://image.flaticon.com/icons/png/512/61/61045.png" alt="" />
                    </a>
                    <a href="">
                        <img style={{ width: "20px", margin: "0 10px 0 10px" }} src="https://image.flaticon.com/icons/png/512/87/87390.png" alt="" />
                    </a>
                    <a href="">
                        <img style={{ width: "20px" }} src="https://image.flaticon.com/icons/png/512/60/60580.png" alt="" />
                    </a>
                </Grid>
                <Grid item md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ marginBottom: "0px", color: "#6f6f6f" }}>By Rustambek</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;