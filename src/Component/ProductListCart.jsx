import React from 'react'
import Flex from "./Flex"

import {FaStar} from "react-icons/fa"
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CartReducer, WishlistReducer } from '../Products/ProductSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const ProductListCart = ({className,ProductImage,Discount,Heading,DiscountPrice,MainPrice,totalreview,BtnClass, value, id, products }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleProductDetaills = ()=>{ 
    navigate(`/products/${id}`)
  }


  const notifyCartProduct = ()=>{
    toast.success('Successfully! Add to Cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  const notifyWishProduct = ()=>{
    toast.success('Successfully! Add to WishList', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }

  const handleAddToCart = ()=>{
    dispatch(CartReducer(products))
    .then(notifyCartProduct())
  }
  
  const handleWishList =()=>{
    dispatch(WishlistReducer(products))
    .then(notifyWishProduct())
  }

  return (
    <>
        <div className='w-[185px] md:w-[270px] group   p-3'>
            <ToastContainer />
            <div className='relative overflow-hidden '>
                <img src={ProductImage} />
                <h5 className={`${className} absolute top-[8px] md:top-[12px] left-[1px] md:left-[12px] py-[4px] px-[12px] bg-primary text-white inline-block text-[12px] rounded-[4px] font-poppins leading-[18px]`}>{Discount}%</h5>
                <div className='absolute top-[8px] md:top-[14px] right-[8px] md:right-[16px] grid gap-[8px]'>
                  <span onClick={handleWishList}
                   className='text-[16] text-[22px] leading-[18px]  p-1 bg-white  rounded-full text-black cursor-pointer'>{<CiHeart />}</span>
                  <span className=' text-[16] text-[22px] leading-[18px]  p-1 bg-white  rounded-full text-black cursor-pointer'>{  <IoEyeOutline />}</span>
                </div>
                  <button onClick={handleAddToCart} className={`${BtnClass} group-hover:bottom-0 text-[16px] font-poppins font-medium leading-[24px] text-center py-[8px] bg-black text-white w-full duration-300 absolute bottom-[-45px] left-0  cursor-pointer`}>Add to Cart</button>
            </div>
            <button onClick={handleProductDetaills} className='text-[14px] md:text-[16px] font-poppins font-medium leading-[20px] md:leading-[24px] cursor-pointer pt-[16px] '>{Heading}</button>
            <Flex className=' gap-[12px] py-[4px] md:py-[8px]'>
              <p className='text-[12px] md:text-[16px] font-poppins text-primary font-medium leading-[20px] md:leading-[24px]'>${DiscountPrice}</p>
              <p className='text-[12px] md:text-[16px] font-poppins text-hide font-medium leading-[20px] md:leading-[24px]'>${MainPrice}</p>
            </Flex>
            <Flex className='gap-4 items-center '>

             <Rate value={value} />
              <span className='text-[14px] font-poppins text-hide font-semibold ml-[8px]'>({totalreview})</span>
            </Flex>
            
        </div>      
    </>
  )
}

export default ProductListCart

