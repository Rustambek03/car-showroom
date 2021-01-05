import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContext';
import Header from '../Dashboard/Header/Header';
import ProductCard from './ProductCard';
import './Product.css';
import PaginationComp from '../../components/Pagination';
import { useHistory } from 'react-router-dom';


const ProductList = () => {

    const { getProductList, productList } = useContext(productsContext)
    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = productList.slice(indexOfFirstPost, indexOfLastPost);

    const changePage = (num) => setCurrentPage(num);

    useEffect(() => {
        getProductList()
    }, [])

    console.log(productList)
    console.log(history.location)

    return (
        <>
            <Header />
            <div className="product-list">
                <div className="product-list-container">
                    <div className="product-list-title">
                        <h1 style={{ color: "black" }}>Cars</h1>
                    </div>
                    <div className="product-list-content">
                        {history.location.pathname === '/productList'
                            ? currentPost.map((item) => <ProductCard item={item} key={item.id} />)
                            : productList.map((item) => <ProductCard item={item} key={item.id} />)}
                    </div>
                    {history.location.pathname === '/productList' ? (
                        <PaginationComp
                            totalPage={productList.length}
                            postPerPage={postPerPage}
                            changePage={changePage}
                        />
                    ) : null}
                </div>
            </div>
        </>
    );
};

export default ProductList;