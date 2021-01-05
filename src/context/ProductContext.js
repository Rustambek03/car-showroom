import axios from 'axios';
import React, { useReducer } from 'react';

export const productsContext = React.createContext();

let INIT_STATE = {
    sliderImage: [],
    popularCar: [],
    productList: [],
    productDetails: null,
    editToProduct: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SLIDER":
            return { ...state, sliderImage: action.payload }
        case "GET_POPULAR_CAR":
            return { ...state, popularCar: action.payload }
        case "GET_PRODUCT_LIST":
            return { ...state, productList: action.payload }
        case "GET_PRODUCT_DETAILS":
            return { ...state, productDetails: action.payload }
        case "EDIT_PRODUCT":
            return { ...state, editToProduct: action.payload }
    }
}

const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getSlider() {
        let { data } = await axios(`http://localhost:8000/sliderPhoto`)
        dispatch({
            type: "GET_SLIDER",
            payload: data
        })
        console.log(data)
    }

    async function getPopularCar() {
        let { data } = await axios(`http://localhost:8000/popularCar`)
        dispatch({
            type: "GET_POPULAR_CAR",
            payload: data
        })
    }

    async function getProductList() {
        let { data } = await axios(`http://localhost:8000/cars`)
        dispatch({
            type: "GET_PRODUCT_LIST",
            payload: data
        })
    }

    async function getProductDetails(id) {
        let { data } = await axios(`http://localhost:8000/cars/${id}`)
        dispatch({
            type: "GET_PRODUCT_DETAILS",
            payload: data
        })
    }

    async function deleteProduct(id) {
        await axios.delete(`http://localhost:8000/cars/${id}`)
        getProductList()
    }

    async function editProduct(id) {
        let { data } = await axios(`http://localhost:8000/cars/${id}`)
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }

    async function saveProduct(newProduct) {
        await axios.patch(`http://localhost:8000/cars/${newProduct.id}`, newProduct)
        getProductList()
    }

    async function addProduct(newProduct) {
        await axios.post(`http://localhost:8000/cars`, newProduct)
        getProductList()
    }

    return (
        <productsContext.Provider value={{
            sliderImage: state.sliderImage,
            popularCar: state.popularCar,
            productList: state.productList,
            productDetails: state.productDetails,
            editToProduct: state.editToProduct,
            addProduct,
            saveProduct,
            editProduct,
            deleteProduct,
            getProductDetails,
            getProductList,
            getPopularCar,
            getSlider
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;