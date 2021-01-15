import React, { useContext, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';
import TextField from '@material-ui/core/TextField';
import Fade from 'react-reveal/Fade';

const AddProduct = () => {

    const { addProduct } = useContext(productsContext)

    let [title, setTitle] = useState('')
    let [price, setPrice] = useState('')
    let [duration, setDuration] = useState('')
    let [racing, setRacing] = useState('')
    let [category, setCategory] = useState('')
    let [driveUnit, setDriveUnit] = useState('')
    let [shortDriveUnit, setShortDriveUnit] = useState('')
    let [range, setRange] = useState('')
    let [seating, setSeating] = useState('')
    let [image, setImage] = useState('')
    let [detailImage3, setDetailImage3] = useState('')
    let [detailImage2, setDetailImage2] = useState('')
    let [detailImage, setDetailImage] = useState('')
    let [maxSpeed, setMaxSpeed] = useState('')
    let [weight, setWeight] = useState('')
    let [wheels, setWheels] = useState('')

    function handleClick() {
        let obj = {
            title: title,
            price: price,
            racing: racing,
            duration: duration,
            range: range,
            maxSpeed: maxSpeed,
            category: category,
            driveUnit: driveUnit,
            shortDriveUnit: shortDriveUnit,
            seating: seating,
            weight: weight,
            wheels: wheels,
            detailImage3: detailImage3,
            detailImage2: detailImage2,
            detailImage: detailImage,
            image: image,
            id: Date.now()
        }
        addProduct(obj)
    }
    return (
        <>
            <Header />
            <div >
                <div className="edit-product">
                    <Fade top>
                        <div className="edit-product-title">
                            <h2> Add Product </h2>
                        </div>
                    </Fade>
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
                                        onChange={(e) => setTitle(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Price*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="price"
                                        onChange={(e) => setPrice(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Category*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="category"
                                        onChange={(e) => setCategory(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Drive Unit*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="driveUnit"
                                        onChange={(e) => setDriveUnit(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Short name Drive Unit*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="shortDriveUnit"
                                        onChange={(e) => setShortDriveUnit(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Third Image*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="detailImage3"
                                        onChange={(e) => setDetailImage3(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Second Image*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="detailImage2"
                                        onChange={(e) => setDetailImage2(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>First Image*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="detailImage"
                                        onChange={(e) => setDetailImage(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Main Image*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="text"
                                        name="image"
                                        onChange={(e) => setImage(e.target.value)}
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
                                        onChange={(e) => setRacing(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Duration*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="duration"
                                        onChange={(e) => setDuration(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Range*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="range"
                                        onChange={(e) => setRange(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Max Speed*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="maxSpeed"
                                        onChange={(e) => setMaxSpeed(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Seating*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="seating"
                                        onChange={(e) => setSeating(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Weight*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="weight"
                                        onChange={(e) => setWeight(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="edit-product-form-input">
                                    <p>Wheels*</p>
                                    <TextField
                                        className="edit-product-form-inp"
                                        type="number"
                                        name="wheels"
                                        onChange={(e) => setWheels(e.target.value)}
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <Fade bottom >
                        <div className="edit-product-button">
                            <Link to="/productList">
                                <button className="edit-product-btn" onClick={handleClick}>
                                    Save
                                    </button>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default AddProduct;