import React from 'react'

const FeaturedCart = ({ image, heading, tittle, shop}) => {
  return (
    <div className='relative group'>
      <img src={image} alt="Featured Image" />
      <div className={`absolute bottom-[32px] group-hover:bottom-[80px] duration-1000 w-[242px] left-[32px] `}>
        <h3 className='text-[24px] text-white font-semibold leading-[24px] font-inter'>{heading}</h3>
        <p className="text-[14px] text-white leading-[21px] font-poppins py-[16px]">{tittle}</p>
        <span className='text-[16px] font-poppins text-white font-medium group-hover:border-b-1 duration-100 pb-[4px] cursor-pointer leading-[24px]'>{shop}</span>
      </div>
    </div>
  )
}

export default FeaturedCart
