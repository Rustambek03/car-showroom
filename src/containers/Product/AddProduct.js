import React, { useContext, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const { addProduct } = useContext(productsContext)

    let [title, setTitle] = useState('')
    let [price, setPrice] = useState('')
    let [duration, setDuration] = useState('')
    let [racing, setRacing] = useState('')
    let [category, setCategory] = useState('')
    let [driveUnit, setDriveUnit] = useState('')
    let [range, setRange] = useState('')
    let [room, setRoom] = useState('')
    let [image, setImage] = useState('')
    let [description1, setDescription1] = useState('')
    let [description2, setDescription2] = useState('')
    let [description3, setDescription3] = useState('')


    function handleClick() {
        let obj = {
            title: title,
            price: price,
            duration: duration,
            racing: racing,
            category: category,
            driveUnit: driveUnit,
            range: range,
            room: room,
            image: image,
            description1: description1,
            description2: description2,
            description3: description3,
            id: Date.now()
        }
        addProduct(obj)
    }
    return (
        <div>
            <div className="edit-product">
                <div className="edit-product-container">
                    <form>
                        <input
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setRacing(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setDriveUnit(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setRange(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setRoom(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setDescription1(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setDescription2(e.target.value)}
                        />
                        <input
                            type="text"
                            onChange={(e) => setDescription3(e.target.value)}
                        />
                    </form>
                    <div className="edit-product-btn">
                        <Link to="/productList">
                            <button onClick={handleClick}>
                                Save
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;