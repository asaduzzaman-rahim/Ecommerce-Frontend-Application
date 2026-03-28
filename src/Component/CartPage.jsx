import React, { useState } from 'react'
import Container from '../Component/Container'
import Button from "../Component/Button"
import Flex from "../Component/Flex"
import BreadCrumb from "../Component/BreadCrumb"
import { ToastContainer, toast, Bounce } from 'react-toastify';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { RemoveReducer } from '../Products/ProductSlice'

import { IoIosArrowUp } from "react-icons/io"; 
import { IoIosArrowDown } from "react-icons/io";
import { ImCross } from "react-icons/im";

 
import Cart1 from "../assets/Monitor-Cart-Small.png"

const CartSection = () => {

  const CartProducts = useSelector((state)=> state.product.cart)

    const [countNumber, setCountNumber] = useState(1)
    
    const Dispatch = useDispatch()

    const notify=()=>{
      toast.error('Delete Cart Product', {
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

    const handleDelete = (id)=>{
      Dispatch(RemoveReducer(id)) 
      notify()
    }

    // ---------------- Count Products Number start ----------------
    const ProductsAdd = ()=>{
      setCountNumber(countNumber+1)
    }
    const ProductsRemove = ()=>{
      setCountNumber(countNumber-1)
    }
    // ---------------- Count Products Number end ----------------

    const navigate = useNavigate()

  return (
    <>
      <div className='pb-[140px] '>
        <ToastContainer/>
        <Container>
            <div className='py-[30px] md:py-[50px] '>
                <BreadCrumb/>
            </div>
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-body ">
                  <thead className="text-sm text-body border-1 border-indigo-400 shadow-hide py-[20px] ">
                    <tr>
                      <th scope="col" className="md:px-6 py-3 text-[16px] rounded-s-base font-bold w-[50%]">
                        Product
                      </th>
                      <th scope="col" className="md:px-6 py-3 text-[16px] font-bold w-[20%]">
                        Price
                      </th>
                      <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base font-bold w-[10%]">
                        Quantity
                      </th>
                      <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base text-right font-bold w-[20%]">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                   <tbody>
                    {
                      CartProducts.map((items, id)=>{
                        return(
                          <tr  key={id} className='py-[20px]'>
                              
                              <td className="px-2 py-2  text-[14px] font-medium !w-[50%]">
                                <div className='flex items-center gap-[20px] relative'> 
                                  <img className="w-[54px] border-1 border-hide rounded-[10px]" src={items.thumbnail} alt="cart photo" /> <p>{items.title}</p>
                                  <ImCross
                                    onClick={()=> handleDelete(items.id)}
                                    className='absolute top-[0%] left-[-2%] p-1 bg-red-500 text-white text-xl rounded-full cursor-pointer'/>
                                </div>
                              </td>
                              <td className='md:px-6 py-2 text-[14px] font-medium w-[5%]'>
                                <p>${items.price}</p>
                              </td>
                              <td className='md:px-6 py-2 text-[14px] font-medium w-[10%]'>
                                  <Flex className='p-1 max-w-[51px] border-1 border-hide rounded-[5px] justify-between items-center'>
                                      <span className='w-[80%] text-[16px] text-center'>{countNumber}</span>
                                      <div  className='w-[20%] mr-2 space-y-[5px]'>
                                          <IoIosArrowUp onClick={ProductsAdd}  className='text-[18px] cursor-pointer' />
                                          <IoIosArrowDown onClick={ProductsRemove}  className='text-[18px] cursor-pointer' />
                                      </div>
                                  </Flex>
                              </td>
                              <td className='md:px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                                <p>${items.price}</p>
                              </td>
                            </tr>                        
                        )
                      })
                    }
                   </tbody>
              
                </table>

                {/* ---------------------------------- */}
                <Flex className="justify-between pt-[24px] pb-[80px]">
                  <Button onClick={()=> navigate("/shop")} className="!bg-white px-[48px] !text-black border-1 "> Return To Shop</Button>
                  <Button className="!bg-white px-[48px] !text-black border-1 ">Update Cart</Button>
                </Flex>
                <Flex className="flex-wrap justify-center lg:justify-between !items-start  gap-y-[50px]">
                  <div className='flex gap-[16px]'>
                    <input type="text" placeholder='Coupon Code' className='pl-[24px] w-[300px] text-xl h-[56px] border-1 border-gray-400' />
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
                    <Button className="mt-[16px]">Procees to Checkout</Button>
                  </div>
                </Flex>
            </div>
        </Container>
      </div>
    </>
  )
}



export default CartSection