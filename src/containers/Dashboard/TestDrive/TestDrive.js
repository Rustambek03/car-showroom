import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';
import Header from '../Header/Header';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import './TestDrive.css';
import { useToasts } from 'react-toast-notifications';
import Fade from 'react-reveal/Fade';


const TestDrive = (props) => {

    const { getProductDetails, productDetails } = useContext(productsContext)
    // const [success, setSeccess] = useState('')
    const history = useHistory();
    const { addToast } = useToasts();

    useEffect(() => {
        getProductDetails(props.match.params.id)
    }, [])

    console.log(props)

    const handleClick = () => {
        history.push('/productList');
        addToast('Thank you for your purchase! We will answer you within 12 hour.', {
            appearance: 'success',
            autoDismiss: true,
        });
    };

    return (
        <>
            <Header />
            <div className="test-drive">
                <Fade top>
                    <div className="test-drive-title">
                        <h1> Recording To a TEST DRIVE </h1>
                    </div>
                </Fade>
                {productDetails ?
                    <>
                        <Grid container className="test-drive-container">
                            <Grid item lg={6} md={6} sm={12} xs={12} className="test-drive-content-image-title">
                                <Fade top>
                                    <p> Your choose </p>
                                    <div className="test-drive-content-image-title-h1">
                                        <h1>  {productDetails.title} </h1>
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} className="test-drive-content-image">
                                <Fade top>
                                    <img src={productDetails.image} alt="" />
                                </Fade>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid item md={12} className="test-drive-content-form">
                                <Fade bottom>
                                    <div className="test-drive-content-form-title">
                                        <h2> Your Contact Information </h2>
                                    </div>
                                    <div className="test-drive-content-form-inputs">
                                        <div className="test-drive-content-form-input">
                                            <p>Name*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="test-drive-content-form-input">
                                            <p>Last Name*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="test-drive-content-form-input">
                                            <p>Name*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="test-drive-content-form-input">
                                            <p>Gender*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="test-drive-content-form-input">
                                            <p>Number*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="test-drive-content-form-input">
                                            <p>E-mail*</p>
                                            <TextField
                                                // id="outlined-multiline-flexible"
                                                // label="Multiline"
                                                // multiline
                                                className="test-drive-content-form-inp"
                                                // rowsMax={6}
                                                // value={value}
                                                // onChange={handleChange}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                    <div className="test-drive-content-form-button">
                                        <Link to="/productList">
                                            <button className="test-drive-content-form-btn" onClick={handleClick}> Send </button>
                                        </Link>
                                    </div>
                                </Fade>
                            </Grid>
                        </Grid>
                    </>
                    : <h1>Loading...</h1>
                }
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default TestDrive;