import React from 'react'

const IconCart = ({IconImg, Num, para}) => {
  return (
    <div className="px-[40px] py-[30px]  border-1 border-gray-500 rounded-[20px] text-center group hover:bg-[#DB4444] transition-all duration-900" >
      <img className='h-[58px] w-[58px] mx-auto bg-black rounded-full border-6 border-[#363738]  transition-all duration-900 group-hover:border-white group-hover:bg-red-500 group-hover:text-[#0000] ' src={IconImg} alt="Icon Img" />
      <h5 className='pt-[24px] pb-[13px] text-[32px] font-bold leading-[30px] tracking-tight  transition-all duration-900 group-hover:text-white'>{Num}</h5>
      <p className=' transition-all duration-900 group-hover:text-white'>{para}</p>
    </div>
  )
}

export default IconCart
