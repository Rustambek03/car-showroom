import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ProductList from './components/Product/ProductList';


const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/productList" component={ProductList} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;