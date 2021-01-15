import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import ContactUs from './containers/Dashboard/ContactUs/ContactUs';
import Favorites from './containers/Dashboard/Favorites/Favorites';
import HomePage from './containers/Dashboard/HomePage/HomePage';
import Order from './containers/Dashboard/Order/Order';
import TestDrive from './containers/Dashboard/TestDrive/TestDrive';
import AddProduct from './containers/Product/AddProduct';
import EditProduct from './containers/Product/EditProduct';
import ProductDetails from './containers/Product/ProductDetails';
import ProductList from './containers/Product/ProductList';
import { AuthContextProvider } from './context/AuthContext';
import ProductsContextProvider from './context/ProductContext';


const Routes = () => {
    return (
        <BrowserRouter>
            <ProductsContextProvider>
                <AuthContextProvider>
                    <Switch>
                        <Route exact path="/productList" component={ProductList} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/productDetails/:id" component={ProductDetails} />
                        <Route exact path="/editProduct/:id" component={EditProduct} />
                        <Route exact path="/addProduct" component={AddProduct} />
                        <Route exact path="/signUp" component={SignUp} />
                        <Route exact path="/signIn" component={SignIn} />
                        <Route exact path="/favorites" component={Favorites} />
                        <Route exact path="/testDrive/:id" component={TestDrive} />
                        <Route exact path="/order/:id" component={Order} />
                        <Route exact path="/contactUs" component={ContactUs} />
                    </Switch>
                </AuthContextProvider>
            </ProductsContextProvider>
        </BrowserRouter>
    );
};

export default Routes;