import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import Header from '../Dashboard/Header/Header';
import ProductCard from './ProductCard';
import './Product.css';
import PaginationComp from '../../components/Pagination';
import { useHistory } from 'react-router-dom';
import { Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import Footer from '../Dashboard/Footer/Footer';
import { Badge } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MenuIcon from '@material-ui/icons/Menu';

const ProductList = (props) => {

    const { getProductList, productList, productCountInFavorites, handleSearch } = useContext(productsContext)
    const history = useHistory();
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenuMode() {
        setIsMenuOpen(!isMenuOpen)
    }

    const clickHandler = () => {
        toggleMenuMode()
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = productList.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (num) => setCurrentPage(num);

    useEffect(() => {
        getProductList()
    }, [])

    const handleFunc = (val) => {
        handleSearch(val)
    }

    return (
        <>
            <Header />
            <Grid container className="product-list">
                <Grid item xl={4} lg={3} md={3}  >
                    <div className={`product-list-sidebar ${isMenuOpen ? "active" : ""}`}>
                        <Sidebar {...props} isMenuOpen={isMenuOpen} clickHandler={clickHandler} />
                    </div>
                </Grid>
                <Grid item xl={8} lg={9} md={9} sm={12} xs={12} className="product-list-auto-content">
                    <div className="product-list-container">
                        <span className="product-list-container-span">
                            <MenuIcon onClick={clickHandler} />
                        </span>
                        <div className="product-list-search">
                            <div className="product-list-search-inp">
                                <input placeholder="Search..." type="text" onChange={(e) => handleFunc(e.target.value)} />
                            </div>
                        </div>
                        <div className="product-list-menu">
                            <div className="product-list-title">
                                <h1>Available Cars</h1>
                            </div>
                            <div className="product-list-favorites">
                                <Link to="/favorites" style={{ textDecoration: "none", }} >
                                    <Badge badgeContent={productCountInFavorites} style={{ color: "black" }}>
                                        <FavoriteBorderIcon style={{ cursor: "pointer", color: "black", width: "50px" }} />
                                    </Badge>
                                </Link>
                            </div>
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
            {/* <Footer /> */}
        </>
    );
};

export default ProductList;