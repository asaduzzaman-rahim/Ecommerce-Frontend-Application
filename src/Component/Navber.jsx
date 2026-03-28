import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'



import { RiShoppingCart2Line } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";

import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";



import Logo from "../assets/Logo.png"

const Navber = () => {
    
    const CartLenght = useSelector((state)=> state.product.cart)
    const WishList = useSelector((state)=> state.product.wishlist)
   
    
    const [navber, setNavber] = useState(false)

        const handleNavber = ()=>{
            setNavber(!navber)
        }


  return (
    <>
        <div className='border-b-1 border-[#808080] '>
            
            <Container className="!p-0">
                <nav className=' pt-[40px] pb-[16px]'>
                    <Flex className="justify-between items-center relative ">
                        <div className='cursor-pointer pl-3'>
                            <NavLink to={"/"}><img src={Logo} alt="logo" /> </NavLink>
                        </div>
                        <div className={` lg:flex  z-10 lg:flex-row justify-between flex-col gap-4 p-4 lg:p-0 lg:w-[75%] lg:static absolute top-12 left-0 lg:bg-white lg:text-black  bg-blue-500 text-white w-full   
                        ${!navber ? "hidden" : "block"} `}>
                            <ul className=' lg:flex flex-wrap gap-[48px] pb-5'>
                                <li> <NavLink to={"/"}>Home </NavLink> </li>
                                <li> <NavLink to={"/contact"}>Contact</NavLink> </li>
                                <li> <NavLink to={"/about"}> About </NavLink> </li>
                                <li> <NavLink to={"/signup"}>Sign Up </NavLink> </li>
                            </ul>
                         
                        <div className='flex items-center gap-[16px] pr-3'>
                                <div className='flex gap-3 !text-black bg-[#F5F5F5]'>
                                    <input type="search" placeholder='What are you looking for?'
                                    className='py-[7px] pl-[15px] pr-[10px]'/>
                                    <RiSearchLine className='h-[32px] w-[32px]   cursor-pointer' />
                                </div>
                                <div className='relative'>
                                    <NavLink to={"/wishlist"}><IoIosHeartEmpty className='text-[32px] cursor-pointer' />
                                        <div className='w-[20px] h-[20px] rounded-full text-white absolute top-[-5px] left-[22px] bg-black flex items-center justify-center'><span  className='text-[12px] font-inter font-semibold '>{WishList.length}</span></div>
                                    </NavLink>
                                </div>
                                <div className='relative'>
                                    <NavLink to={"/cart"}><RiShoppingCart2Line className='text-[32px] cursor-pointer' />
                                        <div className='w-[20px] h-[20px] rounded-full text-white absolute top-[-5px] left-[22px] bg-black flex items-center justify-center'><span className='text-[12px] font-inter font-semibold '>{CartLenght.length}</span></div>
                                    </NavLink> 
                                </div>
                            </div>
                        </div>
                        
                        <button onClick={handleNavber}
                        className='block lg:hidden font-bold text-4xl pr-3 cursor-pointer transition-all duration-700'>{!navber?<LuMenu />:<RxCross1 />}</button>
                    </Flex>
                </nav>
            </Container>
        </div>
    </>
  )
}

export default Navber
