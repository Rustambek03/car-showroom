import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContext';

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
        <>{newEditItem ?
            <div className="edit-product">
                <div className="edit-product-container">
                    <form>
                        <input
                            type="text"
                            name="title"
                            defaultValue={newEditItem.title}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="price"
                            defaultValue={newEditItem.price}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="duration"
                            defaultValue={newEditItem.duration}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="racing"
                            defaultValue={newEditItem.racing}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="category"
                            defaultValue={newEditItem.category}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="driveUnit"
                            defaultValue={newEditItem.driveUnit}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="range"
                            defaultValue={newEditItem.range}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="room"
                            defaultValue={newEditItem.room}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="image"
                            defaultValue={newEditItem.image}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="description1"
                            defaultValue={newEditItem.description1}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="description2"
                            defaultValue={newEditItem.description2}
                            onChange={handleValue}
                        />
                        <input
                            type="text"
                            name="description3"
                            defaultValue={newEditItem.description3}
                            onChange={handleValue}
                        />
                    </form>
                    <div className="edit-product-btn">
                        <Link to="/productList">
                            <button onClick={() => saveProduct(newEditItem)}>
                                Save
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            : <h1>Loading....</h1>
        }
        </>
    );
};

export default EditProduct;