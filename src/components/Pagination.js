import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const PaginationComp = ({ totalPage, postPerPage, changePage }) => {
    const pageNums = [];

    for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
        pageNums.push(i);
    }

    return (
        <div>
            <Pagination
                count={pageNums.length}
                onChange={(e, page) => changePage(page)}
            />
        </div>
    );
};

export default PaginationComp;