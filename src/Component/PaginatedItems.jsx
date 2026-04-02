import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import ProductListCart from './ProductListCart';


import { useSelector } from 'react-redux'


const PaginatedItems = ({ itemsPerPage }) => {

  const allProducts = useSelector((state)=> state.product.product)
 
  const items = allProducts

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <ProductListCart
            products={item}
            key={item?.id}
            id={item?.id}
            Discount={item.discountPercentage}
            ProductImage={item.thumbnail}
            Heading={item.title}
            MainPrice={Math.floor(item.price / (1 - item.discountPercentage / 100))}
            DiscountPrice={item.price}
            totalreview={item.rating}
            value={item.rating}
          />
        ))}
    </>
  )};

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
}

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex gap-2.5 mt-[50px] cursor-pointer"
        pageClassName="px-[25px] py-[2px] bg-black text-white"
      />
    </>
  )
}

export default PaginatedItems
