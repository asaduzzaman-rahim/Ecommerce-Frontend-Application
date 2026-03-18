import React from "react";
import Container from "../Component/Container";
import Flex from "../Component/Flex";
import Grid from "../Component/Grid";

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../Component/Button";
import BreadCrumb from "./BreadCrumb";

const Contact = () => {
  return (
    <>
      <div className="pt-[60px] pb-[140px]">
        <Container>
          <BreadCrumb/>
         <Flex className="flex-wrap justify-between items-center pt-[20px]">
          {/* <Grid className=" grid grid-cols-1 lg:grid-cols-2 lg:justify-items-start gap-[30px]"> */}
            <div className="lg:w-[270px] px-[30px]  gap-[40px] grid grid-cols-2 lg:grid-cols-1">
              <div className="pb-[32px] lg:border-b-1 ">
                <div className="flex items-center gap-[16px] ">
                  <IoCallOutline className="p-[10px] bg-[#DB4444] text-white text-[40px] rounded-full" />
                  <h5 className="text-[16px] !font-medium text-black ">
                    Call To Us
                  </h5>
                </div>
                <p className="text-[14px] leading-[21px] pt-[24px] pb-[16px]">We are available 24/7, 7 days a week.</p>
                <p className="text-[14px] leading-[21px]">Phone: +8801611112222</p>
              </div>

              <div className="lg:pt-[32px]">
                <div className="flex items-center gap-[16px] pb-[24px]">
                  <MdOutlineEmail className="p-[10px] bg-[#DB4444] text-white text-[40px] rounded-full" />
                  <h5 className="text-[16px] !font-medium text-black ">
                    Write To US
                  </h5>
                </div>
                <div className="space-y-4">
                  <p className="text-[14px] leading-[21px]">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-[14px] leading-[21px]">Email: customer@exclusive.com</p>
                  <p className="text-[14px] leading-[21px]">Email: customer@exclusive.com</p>
                </div>
              </div>
            </div>

            {/* // form Section  */}
            
            <div className="w-full lg:w-[70%]">
              <form action="#">
                <div className="flex lg:justify-between items-center gap-[16px] flex-wrap">
                   <input type="text" placeholder="Your Name" className="bg-[#f5f5f5] h-[50px] w-full lg:w-[235px] pl-3"  required/>
                    <input type="email" placeholder="Your Email" className="bg-[#f5f5f5] h-[50px] w-full lg:w-[235px] pl-3" required/>
                    <input type="number" placeholder="Your Phone" className="bg-[#f5f5f5] h-[50px] w-full lg:w-[235px] pl-3"  required/>
                </div>
                <div className="py-[32px]">
                  <input type="text" placeholder="Your Massage" className="bg-[#f5f5f5] pb-[207px] w-full pl-3 py-[10px] "/>
                </div>
                <Button className="inline-block px-[48px] ">Send Massage</Button>
              </form>

            </div>
            </Flex>
          {/* </Grid> */}
        </Container>
      </div>
    </>
  );
};

export default Contact;
