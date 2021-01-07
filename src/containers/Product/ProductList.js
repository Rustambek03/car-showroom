import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import Header from '../Dashboard/Header/Header';
import ProductCard from './ProductCard';
import './Product.css';
import PaginationComp from '../../components/Pagination';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Footer from '../Dashboard/Footer/Footer';


const ProductList = (props) => {

    const { getProductList, productList } = useContext(productsContext)
    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = productList.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (num) => setCurrentPage(num);

    useEffect(() => {
        getProductList()
    }, [])

    // console.log(productList)
    // console.log(history.location)

    return (
        <>
            <Header />
            <Grid container className="product-list">
                <Grid item xs={3}>
                    <div className="product-list-sidebar">
                        <Sidebar {...props} />
                    </div>
                </Grid>
                <Grid item xs={9} className="product-list-auto-content">
                    <div className="product-list-container">
                        <div className="product-list-title">
                            <h1 style={{ color: "black", margin: "20px" }}>Available Cars</h1>
                        </div>
                        <div className="product-list-content">
                            {history.location.pathname === '/productList'
                                ? currentPost.map((item) => <ProductCard item={item} key={item.id} />)
                                : productList.map((item) => <ProductCard item={item} key={item.id} />)}
                        </div>
                        <div className="product-list-pagination">
                            {history.location.pathname === '/productList' ? (
                                <PaginationComp
                                    totalPage={productList.length}
                                    postPerPage={postPerPage}
                                    changePage={changePage}
                                />
                            ) : null}
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default ProductList;