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
                                                name="title"
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
                                                name="price"
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
                                                name="category"
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
                                                name="driveUnit"
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
                                                name="shortDriveUnit"
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
                                                name="detailImage3"
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
                                                name="detailImage2"
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
                                                anme="detailImage"
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
                                                name="image"
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
                                                name="racing"
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
                                                name="duration"
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
                                                name="range"
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
                                                name="maxSpeed"
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
                                                name="seating"
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
                                                name="weight"
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
                                                name="wheels"
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