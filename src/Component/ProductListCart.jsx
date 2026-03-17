import React from 'react'
import Flex from "./Flex"

import {FaStar} from "react-icons/fa"
import {CiHeart} from "react-icons/ci"
import {IoEyeOutline} from "react-icons/io5"


const ProductListCart = ({className,ProductImage,Discount,Heading,DiscountPrice,MainPrice,total,BtnClass,Icon1,Icon2}) => {
  return (
    <>
        <div className='w-[185px] md:w-[270px] group cursor-pointer  p-3'>
            <div className='relative overflow-hidden '>
                <img src={ProductImage} />
                <h5 className={`${className} absolute top-[8px] md:top-[12px] left-[1px] md:left-[12px] py-[4px] px-[12px] bg-primary text-white inline-block text-[12px] rounded-[4px] font-poppins leading-[18px]`}>{Discount}%</h5>
                <div className='absolute top-[8px] md:top-[14px] right-[8px] md:right-[14px]'>
                  <span className='text-[16] text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'>{Icon1}</span>
                  <span className=' text-[16] text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'>{Icon2}</span>
                </div>
                  <button className={`${BtnClass} group-hover:bottom-0 text-[16px] font-poppins font-medium leading-[24px] text-center py-[8px] bg-black text-white w-full duration-300 absolute bottom-[-45px] left-0  cursor-pointer`}>Add to Cart</button>
            </div>
            <h3 className='text-[14px] md:text-[16px] font-poppins font-medium leading-[20px] md:leading-[24px] pt-[16px] '>{Heading}</h3>
            <Flex className=' gap-[12px] py-[4px] md:py-[8px]'>
              <p className='text-[12px] md:text-[16px] font-poppins text-primary font-medium leading-[20px] md:leading-[24px]'>${DiscountPrice}</p>
              <p className='text-[12px] md:text-[16px] font-poppins text-hide font-medium leading-[20px] md:leading-[24px]'>${MainPrice}</p>
            </Flex>
            <Flex className='gap-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <span className='text-[14px] font-poppins text-hide font-semibold ml-[8px]'>{total}</span>
            </Flex>
            
        </div>      
    </>
  )
}

export default ProductListCart

