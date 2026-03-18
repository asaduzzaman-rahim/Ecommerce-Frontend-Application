import React, { useState } from "react";
import Container from "../Component/Container";
import Flex from "../Component/Flex";
import Button from "../Component/Button";
import SecHeading from "../Component/SecHeading"
import BreadCrumb from "./BreadCrumb";

import {FaStar} from "react-icons/fa"
import { IoIosHeartEmpty } from "react-icons/io";



import ProductImg01 from "../assets/Product Details Img (1).png";
import ProductImg02 from "../assets/Product Details Img (2).png";
import ProductImg03 from "../assets/Product Details Img (3).png";
import ProductImg04 from "../assets/Product Details Img (4).png";
import ProductImg05 from "../assets/Product Details Img (5).png";
import Delivary from "../assets/icon-delivery.png"
import Return from "../assets/Icon-return.png"
import RelatedProductList from "../Component/RelatedProductList";

const ProductDetailsPage = () => {

  const Size = ["XS", "S", "M", "L", "XL", "XXL"]

  const [selectedSize, setSelectedSize] = useState("M")
  const [productNumber, setProductNumber] = useState(1)



  return (
    <>
      <section>
        <Container>
          <div className="!py-[80px]">
            <span className=" text-[14px] leading-[21px] font-poppins">
              <BreadCrumb/>
            </span>
          </div>
          <Flex className=" flex-wrap gap-[70px] !items-start justify-center">
            <div>
              <Flex className="gap-[30px] flex-wrap">
                <Flex className="md:flex-col  gap-[16px]">
                  <img className="w-[22%] md:w-full" src={ProductImg02} alt="Product Img" />
                  <img className="w-[22%] md:w-full" src={ProductImg03} alt="Product Img" />
                  <img className="w-[22%] md:w-full" src={ProductImg04} alt="Product Img" />
                  <img className="w-[22%] md:w-full" src={ProductImg05} alt="Product Img" />
                </Flex>
                <img src={ProductImg01} alt="Product Img" />
              </Flex>
            </div>

            {/* Products Content Details Part Start  */}

            <div className="lg:w-[393px] ">
              <h1 className="text-[24px] font-inter font-semibold leading-[24px]">Havic HV G-92 Gamepad</h1>
              <Flex className="gap-[8px] py-[16px] ">
                <Flex>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </Flex>
                <Flex className="gap-[16px]">
                    <p className="text-[14px] font-poppins leading-[21px] text-hide">(150 Reviews)</p>
                    <p className="text-[14px] font-poppins text-[#00FF66] leading-[21px] border-l-1 pl-[16px] border-hide">In Stock</p>
                </Flex>
              </Flex>
                <div>
                    <h3 className="text-[24px] leading-[24px] font-inter">$192.00</h3>
                    <p className="text-[14px] leading-[21px] font-poppins py-[24px] border-b-1 border-hide">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                </div>
                <div className="py-[24px] flex items-center gap-[24px]">
                    <h5 className="text-[20px] leading-[20px] font-inter">Colors: </h5>
                    <div className="flex gap-[8px]">
                        <input type="radio" name="color" id="color" className="h-[20px] w-[20px]"/>
                        <input type="radio" name="color" id="color" className="h-[20px] w-[20px]"/>
                    </div>
                </div>
                <div className="pb-[24px] flex items-center gap-[24px]">
                    <h5 className="text-[20px] leading-[20px] font-inter">Size: </h5>
                    <div className="flex items-center gap-[16px]">
                      {Size.map((size) => (
                        <button
                          key={size}  onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 textsm font-medium rounded-[10px] border duration-300 cursor-pointer 
                          ${selectedSize === size 
                            ? "bg-primary text-white" 
                            : "bg-white text-black border-gray-400 hover:border-primary"}`}
                        >
                          {size}
                        </button>
                      ))}                       
                    </div>
                </div>

                <div className="flex gap-[25px] items-center h-[44px]">
                  <div className="flex items-center border-1 border-hide rounded-md">
                    <button onClick={()=>setProductNumber(productNumber-1)}
                    className="px-[8px] py-[6px] text-[26px] font-poppins font-medium leading-[28px] border-r-1 border-hide cursor-pointer">-</button>
                    <span className="px-[34px] py-[6px] text-[20px] w-[8px] text-center font-poppins font-medium leading-[28px]">{productNumber}</span>
                    <button onClick={()=>setProductNumber(productNumber+1)}
                    className="px-[8px] py-[6px] text-[26px] font-poppins font-medium bg-primary text-white leading-[28px] cursor-pointer">+</button>
                  </div>
                    <Button className="!py-[10px] rounded-[4px]">Buy Now</Button>
                    <IoIosHeartEmpty className='h-[40px] w-[40px] p-[4px]  border-hide border-1 rounded-[4px] cursor-pointer' />
                </div>

                <div className="w-[400px] border-1 border-hide rounded-[5px] mt-[40px]">
                  <div className="flex items-center gap-[16px] p-4 border-b-1 border-hide">
                    <img src={Delivary} alt="Delivary Icon" />
                    <div>
                      <h4 className="!text-[16px] font-poppins font-medium leading-[24px] ">Free Delivery</h4>
                      <p className="text-sm font-poppins font-medium leading-[18px] underline">Enter your postal code for Delivery Availability</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[16px] p-4">
                    <img src={Return} alt="Return Icon" />
                    <div>
                      <h4 className="!text-[16px] font-poppins font-medium leading-[24px] ">Return Delivery</h4>
                      <p className="text-sm font-poppins font-medium leading-[18px] underline">Free 30 Days Delivery Returns. Details</p>
                    </div>
                  </div>
                </div>
            </div>

            {/* Products Content Details Part End  */}

            {/* Related Item Start */}
            <div className="my-[40px] md:my-[80px] lg:my-[140px]">
                <SecHeading tittle="Related Item"/>
                <div className="mt-[60px]">
                      <RelatedProductList/>
                </div>
            </div>
            {/* Related Item End */}

          </Flex>
        </Container>
      </section>
    </>
  );
};

export default ProductDetailsPage;
