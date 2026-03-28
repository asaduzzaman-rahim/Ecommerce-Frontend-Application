import React from 'react'
import Grid from '../Component/Grid'
import Container from '../Component/Container'
import Button from '../Component/Button'
import BreadCrumb from './BreadCrumb'

import Cart1 from "../assets/Monitor-Cart-Small.png"
import Cart2 from "../assets/Gamepad-Cart-Small.png"
import BankImage from "../assets/Bank-Icon.png"

const CheckOut = () => {
  return (
    <>
     <div className='pb-[80px] lg:pb-[140px]'>
        <Container>
            <div className='py-[40px] lg:py-[80px]'>
                <BreadCrumb/>
            </div>
            <Grid className="grid-cols-1 lg:grid-cols-2 justify-between !items-start lg:gap-x-[173px] gap-y-[40px]">
                <div>
                    <h2 className='text-[25px] lg:text-[36px] font-medium leading-[30px] '>Billing Details</h2>
                    <div className='pt-[48px]'>
                        <form action="#" className="space-y-[32px]">
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Frist Name</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Company Name</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Street Address*</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Apartment, floor, etc. (optional)</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Town/City*</label> <br />
                                <input type="text"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" required />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Phone Number*</label> <br />
                                <input type="number"  id="phone" name="phone" pattern="(^(\\+88|0088)?(01){1}[3456789]{1}(\\d){8})$" 
                                placeholder="01XXXXXXXXX"  
                                className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1" required />
                            </div>
                            <div>
                                <label htmlFor="text" className='text-[16px] leading-[24px]'>Email Address</label> <br />
                                <input type="email"  className="bg-[#f5f5f5] font-inter px-2 text-xl h-[50px] w-full lg:w-[470px] mt-[8px] pl-1"  required/>
                            </div>
                            <div className='flex gap-[16px]'>
                                <input className='!bg-primary' type="checkbox" />
                                <p>Save this information for faster check-out next time</p>
                            </div>
                        </form>
                    </div>
                </div>    
                <div className='lg:mt-[32px]'>
                    <table className="w-full text-sm text-left rtl:text-right text-body space-y-[32px]">
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <div className='flex items-center gap-[20px]'> 
                                    <img src={Cart1} alt="cart photo" /> <p>LCD Monitor</p>
                                </div>
                            </td>
                            <td className=' py-2 text-[14px] w-[20%] text-end'>
                                <p>$650</p>
                            </td>
                        </tr>
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <div className='flex items-center gap-[20px]'> 
                                    <img src={Cart2} alt="cart photo" /> <p>H1 Gamepad</p>
                                </div>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$550</p>
                            </td>
                        </tr>
                        <tr className=' border-b-1'>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Subtotal:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$1750</p>
                            </td>
                        </tr>
                        <tr className=' border-b-1'>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Shipping:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>Free</p>
                            </td>
                        </tr>
                        <tr>
                            <td className=" py-2  text-[14px]  w-[50%]">
                                <p>Total:</p>
                            </td>
                            <td className=' py-2 text-[14px]  w-[20%] text-end'>
                                <p>$1750</p>
                            </td>
                        </tr>
                    </table>

                        {/* Payment gatway section start */}

                       
                            <div className=" py-2  text-[14px] flex justify-between items-center w-full">
                                <div className='flex items-center gap-[16px]'>
                                    <input className='h-[20px] w-[20px] bg-primary' type="radio" name="payment" />
                                    <p>Bank</p>
                                </div>
                                <img src={BankImage} alt="Bank Image" />
                            </div>
                            <div className=" py-2  text-[14px] flex items-center gap-[16px]">
                                <input className='h-[20px] w-[20px] bg-primary' type="radio"  name="payment"/>
                                <p>Cash on dalivary</p>
                            </div>
                        
                        {/* Payment gatway section End */}
                        
                    <div className='flex gap-x-[16px] py-[32px]'>
                        <input type="text" placeholder='Coupon Code' className='w-[300px] h-[56px] font-inter px-2 text-xl bg-[#f4f4f4]' />
                        <Button>ApplyCoupon</Button>
                    </div>
                    <Button>Place Order</Button>
                </div>    
            </Grid>  
        </Container>
    </div> 
    </>
  )
}

export default CheckOut
