import React from 'react'
import Flex from "./Flex"

import { RiDeleteBin6Line } from "react-icons/ri";

 
const ProductListCart = ({className,ProductImage,Discount,Heading,DiscountPrice,MainPrice, BtnClass}) => {
  return (
    <>
        <div className='w-[185px] md:w-[270px] '>
            <div className='relative overflow-hidden '>
                <img src={ProductImage} />
                <h5 className={`${className} absolute top-[8px] md:top-[12px] left-[1px] md:left-[12px] py-[4px] px-[12px] bg-primary text-white inline-block text-[12px] rounded-[4px] font-poppins leading-[18px]`}>{Discount}</h5>
                <div className='absolute top-[12px] right-[12px]'>
                  <RiDeleteBin6Line className='text-[26px] leading-[18px]  mb-[8px] text-black cursor-pointer'/>
                </div>
                  <button  className={`${BtnClass} bottom-0 text-[16px] font-poppins font-medium leading-[24px] text-center py-[8px] bg-black text-white w-full duration-300 absolute  left-0  cursor-pointer`}>Add to Cart</button>
            </div>
            <h3 className='text-[14px] md:text-[16px] font-poppins font-medium leading-[20px] md:leading-[24px] cursor-pointer pt-[16px] '>{Heading}</h3>
            <Flex className=' gap-[12px] py-[8px]'>
              <p className='text-[12px] md:text-[16px] font-poppins text-primary font-medium leading-[20px] md:leading-[24px]'>${DiscountPrice}</p>
              <p className='text-[12px] md:text-[16px] font-poppins text-hide font-medium leading-[20px] md:leading-[24px]'>${MainPrice}</p>
            </Flex>
          
            
        </div>      
    </>
  )
}

export default ProductListCart

