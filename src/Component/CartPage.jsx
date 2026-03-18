import React, { useState } from 'react'
import Container from '../Component/Container'
import Button from "../Component/Button"
import Flex from "../Component/Flex"
import { IoIosArrowUp } from "react-icons/io"; 
import { IoIosArrowDown } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";


import Cart1 from "../assets/Monitor-Cart-Small.png"
import Cart2 from "../assets/Gamepad-Cart-Small.png"

const CartSection = () => {

    const [countNumber, setCountNumber] = useState(1)

    const ProductsAdd = ()=>{
        setCountNumber(countNumber+1)
    }
    const ProductRemo = ()=>{
        setCountNumber(countNumber-1)
    }

    const navigate = useNavigate()

  return (
    <>
      <div className='pb-[140px] '>
        <Container>
            <div className='py-[30px] md:py-[50px] lg:py-[80px] '>
                <span>Home / Cart</span>
            </div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-body ">
                  <thead className="text-sm text-body bg-neutral-secondary-medium border-1 border-indigo-200 py-[20px] ">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-s-base font-bold w-[50%]">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] font-bold w-[20%]">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base font-bold w-[10%]">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3 text-[16px] rounded-e-base text-right font-bold w-[20%]">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tr className='py-[20px]'>
                    <td className="px-2 py-2  text-[14px] font-medium w-[50%]">
                      <div className='flex items-center gap-[20px]'> 
                        <img src={Cart1} alt="cart photo" /> <p>LCD Monitor</p>
                      </div>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%]'>
                      <p>$650</p>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[10%]'>
                        <Flex className='p-1 border-1 border-hide rounded-[5px] justify-between items-center'>
                            <span className='w-[80%] text-[16px] text-center'>{countNumber}</span>
                            <div  className='w-[20%] mr-2 space-y-[5px]'>
                                <IoIosArrowUp onClick={ProductsAdd}  className='text-[14px]' />
                                <IoIosArrowDown onClick={ProductRemo}  className='text-[14px]' />
                            </div>
                        </Flex>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                      <p>$650</p>
                    </td>
                  </tr>

                  {/* <tr className='py-[20px]'>
                    <td className="px-2 py-2  text-[14px] font-medium w-[50%]">
                      <div className='flex items-center gap-[20px]'> 
                        <img src={Cart2} alt="cart photo" /> <p>H1 Gamepad</p>
                      </div>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%]'>
                      <p>$550</p>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[10%]'>
                        <Flex className='p-1 border-1 border-hide rounded-[5px] justify-between items-center'>
                            <span className='w-[80%] text-[16px] text-center'>1</span>
                            <div  className='w-[20%] mr-2 space-y-[5px]'>
                                <IoIosArrowUp />
                                <IoIosArrowDown />
                            </div>
                        </Flex>
                    </td>
                    <td className='px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                      <p>$1100</p>
                    </td>
                  </tr> */}
                </table>

                {/* ---------------------------------- */}
                <Flex className="justify-between pt-[24px] pb-[80px]">
                  <Button onClick={()=> navigate("/shop")} className="!bg-white px-[48px] !text-black border-1 "> Return To Shop</Button>
                  <Button className="!bg-white px-[48px] !text-black border-1 ">Update Cart</Button>
                </Flex>
                <Flex className="flex-wrap justify-center lg:justify-between !items-start  gap-y-[50px]">
                  <div className='flex gap-[16px]'>
                    <input type="text" placeholder='Coupon Code' className='pl-[24px] w-[300px] h-[56px] border-1 border-gray-400' />
                    <Button>Apply Coupon</Button>
                  </div>

                  {/* --------------------------------------- */}
                  {/* *!  total section */}

                  <div className='px-[24px] py-[32px] border-1 w-[470px] '>
                    <h4 className='text-[20px] font-medium leading-[28px] pb-[24px]'>Cart Total</h4>
                    <table className='w-full text-sm text-left rtl:text-right text-body'>
                      <tr className='border-b-1'>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Subtotal:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>$1750</p>
                      </td>
                      </tr>
                      {/* ----------------- Shipping Section ----------------- */}
                      <tr className='border-b-1 py-[16px]'>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Shipping:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>Free</p>
                      </td>
                      </tr>
                      {/* -----------Total Section -------------- */}
                      <tr className=''>
                        <td className=' py-2 text-[14px] font-medium w-[50%] text-left'>
                        <p>Total:</p>
                      </td>
                      <td className=' py-2 text-[14px] font-medium w-[50%] text-right'>
                        <p>$1450</p>
                      </td>
                      </tr>
                    </table>
                    <Button className="mt-[16px]"><Link to={"/CheckOut"}>Procees to checkout</Link></Button>
                  </div>
                </Flex>
            </div>
        </Container>
      </div>
    </>
  )
}



export default CartSection