import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Footer from '../Footer/Footer';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import { useToasts } from 'react-toast-notifications';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import Fade from 'react-reveal/Fade';
import "./ContactUs.css";
import { useHistory } from 'react-router-dom';

const MyGoogleMapComponent = withGoogleMap(props => (
    <GoogleMap />
))


const ContactUs = () => {

    const { addToast } = useToasts();
    const history = useHistory();


    const handleClick = () => {
        history.push('/productList');
        addToast('Thank you for your purchase! We will answer your question.', {
            appearance: 'success',
            autoDismiss: true,
        });
    };

    return (
        <>
            <Header />
            <div className="contact-us">
                <div className="contact-us-container">
                    <div className="contact-us-container-image">
                        <img src="https://www.duquesnelight.com/images/default-source/default-album/charging.jpg?sfvrsn=7b17a042_0" alt="" />
                    </div>
                    <Fade top>
                        <div className="contact-us-container-title">
                            <h1> Contact Us </h1>
                        </div>
                    </Fade>
                    <Grid container className="contact-us-column-content">
                        <Grid item lg={6} md={6} sm={12} xs={12} className="contact-us-column-content1">
                            <Fade left>
                                <div className="contact-us-1column-title">
                                    <h2>About</h2>
                                </div>
                                <div className="contact-us-description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur ratione in neque voluptatem? Quo, illo nostrum. Sapiente officia quo tempora labore repudiandae praesentium quasi dolorum totam quibusdam similique asperiores temporibus illo ratione nam, fugit excepturi voluptas enim. Nam, nisi quas repellendus corporis facilis quae delectus repellat dolores natus repudiandae.</p>
                                </div>
                                <div className="contact-us-1column-title">
                                    <h2> Contact </h2>
                                </div>
                                <div className="contact-us-column-content1-info">
                                    <div className="contact-us-column-content1-address">
                                        <CallRoundedIcon style={{ fontSize: "40px" }} />
                                        <a href="tel: 0777777777"> Tel: 0777 77 77 77 </a>
                                    </div>
                                    <div className="contact-us-column-content1-address">
                                        <RoomRoundedIcon style={{ fontSize: "40px" }} />
                                        <a href=""> Isanova 105/3, Bishkek </a>
                                    </div>
                                    <div className="contact-us-column-content1-address">
                                        <EmailRoundedIcon style={{ fontSize: "40px" }} />
                                        <a href="electricCar@gmail.com">electricCar@gmail.com</a>
                                    </div>
                                </div>
                            </Fade>
                            <div>
                                <div>
                                    {/* <FiInstagram /> */}
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} className="contact-us-column-content2">
                            <Fade right>
                                <div className="contact-us-2column-title">
                                    <h2> Have a question </h2>
                                </div>
                                <div className="contact-us-inputs">
                                    <div className="contact-us-input">
                                        <p>Name*</p>
                                        <input
                                            className="contact-us-inp"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="contact-us-input">
                                        <p>Email*</p>
                                        <input
                                            className="contact-us-inp"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div className="contact-us-input">
                                        <p>Message*</p>
                                        <input
                                            className="contact-us-inp3"
                                            required
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="contact-us-button">
                                    <button className="contact-us-btn" type="submit" onClick={handleClick} >Send</button>
                                </div>
                            </Fade>
                        </Grid>
                    </Grid>
                    <div>
                        {/* <MyGoogleMapComponent
                                containerElement={
                                    <div style={{ width: "100%", height: "100%" }}></div>
                                }
                                mapElement={
                                    <div style={{ width: "100%", height: "100%" }}> </div>
                                }
                            /> */}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default ContactUs;