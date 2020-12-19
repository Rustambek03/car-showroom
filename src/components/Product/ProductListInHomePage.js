import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../context/ProductContext';

const ProductListInHomePage = () => {

    const { getPopularCar, popularCar } = useContext(productsContext)

    useEffect(() => {
        getPopularCar()
    }, [])

    console.log(popularCar)


    return (
        <div style={{ minHeight: "700px" }}>
            <h2 style={{ margin: "50px", textAlign: "center" }}>Popular Cars</h2>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }} >
                {popularCar.map(item => (
                    <div key={item.id} style={{ border: "solid 1px #e1e1e1", borderRadius: "5px", width: "600px", display: "flex", marginBottom: "40px", cursor: "pointer" }}>
                        <div>
                            <img style={{ margin: "20px", objectFit: "cover", width: "260px", height: "220px" }} src={item.image} alt="" />
                        </div>
                        <div style={{ margin: "20px" }}>
                            <h3 style={{ color: "black" }}> {item.title} </h3>
                            <p></p>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    );
};

export default ProductListInHomePage;