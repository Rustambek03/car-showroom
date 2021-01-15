import Slider from '@material-ui/core/Slider';
import React, { useContext, useState } from 'react';
import { productsContext } from '../../../context/ProductContext';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import './Sidebar.css';
import { FormControlLabel, FormGroup, RadioGroup, TextField } from '@material-ui/core';

const Sidebar = (props) => {

    const [sliderValue, setSliderValue] = useState([10000, 100000]);
    const { getProductList, handleSearch } = useContext(productsContext)

    const handleChangeSlider = (event, value) => {
        setSliderValue(value);
        let search = new URLSearchParams(props.history.location.search)
        search.set("price_gte", value[0])
        search.set("price_lte", value[1])
        props.history.push(`${props.location.pathname}?${search.toString()}`)
        getProductList()
    };

    function addParams(params, value) {
        if (value === "all") {
            props.history.push(props.location.pathname.replace(params))
            getProductList()
            return
        }

        let search = new URLSearchParams(props.history.location.search)
        search.set(params, value)
        props.history.push(`${props.location.pathname}?${search.toString()}`)
        getProductList()
    }

    console.log(props.history)

    const handleFunc = (val) => {
        handleSearch(val)
    }

    const GreenRadio = withStyles({
        root: {
            color: "gray",
            '&$checked': {
                color: "black",
            },
        },
        checked: {},
    })((props) => <Radio color="default" {...props} />);


    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-title">
                    <span><CloseIcon onClick={props.clickHandler} /></span>
                    <h5> Filter </h5>
                </div>
                <div className="sidebar-search">
                    <div className="sidebar-search-inp">
                        <input placeholder="Search.." type="text" onChange={(e) => handleFunc(e.target.value)} />
                    </div>
                </div>
                <div className="sidebar-price">
                    <div className="sidebar-price-title">
                        <p> Price </p>
                    </div>
                    <div className="sidebar-slider">
                        <div className="sidebar-slider-inp">
                            <input className="sidebar-slider-input" type="text" readOnly value={`${sliderValue[0]} $`} />
                            <input className="sidebar-slider-input" type="text" readOnly value={`${sliderValue[1]} $`} />
                        </div>
                        <Slider
                            className="Slider"
                            style={{ width: "70%", color: "black" }}
                            min={10000}
                            max={100000}
                            value={sliderValue}
                            onChange={handleChangeSlider}
                            aria-labelledby="range-slider"
                        />
                    </div>
                </div>
                <div className="sidebar-category">
                    <div className="sidebar-category-title">
                        <p> Carcase </p>
                    </div>
                    <div className="sidebar-category-checkboxs">
                        <FormControl className="sidebar-category-checkbox-content" component="fieldset" onChange={(e) => addParams("category=", e.target.value)}>
                            <RadioGroup aria-label="price" name="price1" >
                                <FormControlLabel className="sidebar-checkbox" value="all" control={<GreenRadio />} label="All" />
                                <FormControlLabel className="sidebar-checkbox" value="Sedan" control={<GreenRadio />} label="Sedan" />
                                <FormControlLabel className="sidebar-checkbox" value="Liftback" control={<GreenRadio />} label="Liftback" />
                                <FormControlLabel className="sidebar-checkbox" value="Hatchback" control={<GreenRadio />} label="Hatchback" />
                                <FormControlLabel className="sidebar-checkbox" value="SUV" control={<GreenRadio />} label="SUV" />
                                <FormControlLabel className="sidebar-checkbox" value="Crossover" control={<GreenRadio />} label="Crossover" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;