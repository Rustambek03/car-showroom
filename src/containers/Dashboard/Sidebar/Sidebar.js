import Slider from '@material-ui/core/Slider';
import React, { useContext, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';
import './Sidebar.css';

const Sidebar = (props) => {

    const [sliderValue, setSliderValue] = useState([10000, 100000]);
    const { getProductList, handleSearch } = useContext(productsContext)
    // const [searchState, setSearchState] = useState('')

    const handleChange = (event, value) => {
        setSliderValue(value);
        let search = new URLSearchParams(props.history.location.search)
        search.set("price_gte", value[0])
        search.set("price_lte", value[1])
        props.history.push(`${props.location.pathname}?${search.toString()}`)
        getProductList()
    };

    const handleFunc = (val) => {
        handleSearch(val)
    }

    // console.log(sliderValue)

    return (
        <div className="sidebar">
            <div className="sidebar-price">
                <div className="sidebar-title">
                    <p> Price </p>
                </div>
                <div className="sidebar-slider">
                    <Slider
                        style={{ width: "70%", color: "black" }}
                        min={10000}
                        max={100000}
                        value={sliderValue}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                    <div className="sidebar-slider-inp">
                        <input className="sidebar-slider-input" type="text" value={sliderValue[0]} />
                        <input className="sidebar-slider-input" type="text" value={sliderValue[1]} />
                    </div>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-inp">
                    <input className="sidebar-search-input" type="text" onChange={(e) => handleFunc(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;