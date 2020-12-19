import axios from 'axios';
import React, { useReducer } from 'react';

export const productsContext = React.createContext();

let INIT_STATE = {
    sliderImage: [],
    popularCar: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SLIDER":
            return { ...state, sliderImage: action.payload }
        case "GET_POPULAR_CAR":
            return { ...state, popularCar: action.payload }
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

    return (
        <productsContext.Provider value={{
            sliderImage: state.sliderImage,
            popularCar: state.popularCar,
            getPopularCar,
            getSlider
        }}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;