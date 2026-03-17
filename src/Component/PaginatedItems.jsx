import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import ProductListCart from './ProductListCart';

import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";


const PaginatedItems = ({ itemsPerPage , allProducts }) => {

  const items = allProducts

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <ProductListCart
            key={item.id}
            Discount={item.discountPercentage}
            ProductImage={item.thumbnail}
            Heading={item.title}
            MainPrice={Math.floor(item.price / (1 - item.discountPercentage / 100))}
            DiscountPrice={item.price}
            Icon1={<CiHeart />}
            Icon2={<IoEyeOutline />}
          />
        ))}
    </>
  )};

   const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
}

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default PaginatedItems
