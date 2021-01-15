import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import Header from '../Dashboard/Header/Header';
import TextField from '@material-ui/core/TextField';
import Fade from 'react-reveal/Fade';

const EditProduct = () => {

    const { editToProduct, saveProduct } = useContext(productsContext)
    const [newEditItem, setNewEditItem] = useState(editToProduct)

    useEffect(() => {
        setNewEditItem(editToProduct);
    }, [editToProduct]);


    function handleValue(e) {
        let newObj = {
            ...newEditItem,
            [e.target.name]: e.target.value,
        };
        setNewEditItem(newObj);
    }

    console.log(newEditItem)

    return (
        <>
            <Header />
            <div>
                <div className="edit-product">
                    <Fade top>
                        <div className="edit-product-title">
                            <h2> Add Product </h2>
                        </div>
                    </Fade>
                    {newEditItem ?
                        <>
                            <div className="edit-product-container">
                                <Fade left delay={200}>
                                    <div className="edit-product-first-column">
                                        <div className="edit-product-first-column-title">
                                            <h3>About</h3>
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Title*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.title}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Price*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.price}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Category*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.category}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Drive Unit*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.driveUnit}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Short name Drive Unit*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.shortDriveUnit}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Third Image*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.detailImage3}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Second Image*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.detailImage2}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>First Image*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.detailImage}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Main Image*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="text"
                                                defaultValue={newEditItem.image}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                </Fade>
                                <Fade right delay={200}>
                                    <div className="edit-product-second-column">
                                        <div className="edit-product-second-column-title">
                                            <h3>Specs</h3>
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Acceleration*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.racing}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Duration*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.duration}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Range*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.range}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Max Speed*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.maxSpeed}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Seating*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.seating}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Weight*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.weight}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                        <div className="edit-product-form-input">
                                            <p>Wheels*</p>
                                            <TextField
                                                className="edit-product-form-inp"
                                                type="number"
                                                defaultValue={newEditItem.wheels}
                                                onChange={handleValue}
                                                variant="outlined"
                                            />
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <Fade bottom >
                                <div className="edit-product-button">
                                    <Link to="/productList">
                                        <button className="edit-product-btn" onClick={() => saveProduct(newEditItem)}>
                                            Save
                                    </button>
                                    </Link>
                                </div>
                            </Fade>
                        </>
                        : <h1>Loading....</h1>
                    }
                </div>
            </div>
        </>
    );
};

export default EditProduct;