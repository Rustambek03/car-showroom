import axios from 'axios';
import React, { useReducer } from 'react';

export const productsContext = React.createContext();

let INIT_STATE = {
    sliderImage: [],
    popularCar: [],
    productList: [],
    productDetails: null,
    editToProduct: null,
    favoriteData: {},
    productCountInFavorites: JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")).products.length : 0
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
        case "HANDLE_SEARCH":
            return { ...state, productList: action.payload }
        case "GET_FAVORITES":
            return { ...state, favoriteData: action.payload, productCountInFavorites: action.payload.products.length }
        case "COUNT_PRODUCTS_IN_FAVORITES":
            return { ...state, productCountInFavorites: action.payload }
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

    async function getProductList(value) {
        let { data } = await axios(`http://localhost:8000/cars${window.location.search.replace('%3D', '')}`)
        dispatch({
            type: "GET_PRODUCT_LIST",
            payload: data
        })
    }

    async function handleSearch(value) {
        let { data } = await axios(`http://localhost:8000/cars?q=${value}`)
        dispatch({
            type: "HANDLE_SEARCH",
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


    // =========================================================== Favorites


    function getAllFavorites() {
        return JSON.parse(localStorage.getItem('favorites'))
    }

    function getFavorites() {
        let favorites = getAllFavorites()
        dispatch({
            type: "GET_FAVORITES",
            payload: favorites
        })
    }

    function addProductToFavorites(item) {
        // console.log(productList)
        let favorites = getAllFavorites()
        if (!favorites) {
            favorites = {
                products: [],
            }
        }

        let newProduct = {
            product: item,
        }

        let obj = favorites.products.find(elem => elem.product.id === item.id)
        if (obj) {
            favorites.products = favorites.products.filter(elem => elem.product.id !== item.id)
        } else {
            favorites.products.push(newProduct)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        getFavorites()
    }


    function checkItemInFavorites(id) {
        let favorites = getAllFavorites()
        if (!favorites) return false;
        let newFavorites = favorites.products.filter((item) => item.product.id === id)
        return newFavorites.length ? true : false;
    }

    function countProductsInfavorites() {
        let favorites = getAllFavorites()
        if (!favorites) return;
        dispatch({
            type: 'COUNT_PRODUCTS_IN_FAVORITES',
            payload: favorites.products.length,
        });
    }


    return (
        <productsContext.Provider value={{
            sliderImage: state.sliderImage,
            popularCar: state.popularCar,
            productList: state.productList,
            productDetails: state.productDetails,
            editToProduct: state.editToProduct,
            productCountInFavorites: state.productCountInFavorites,
            favoriteData: state.favoriteData,
            addProduct,
            saveProduct,
            editProduct,
            deleteProduct,
            getProductDetails,
            getProductList,
            getPopularCar,
            getSlider,
            handleSearch,
            addProductToFavorites,
            checkItemInFavorites,
            countProductsInfavorites,
            getFavorites
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;