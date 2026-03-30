import React from "react";
import Container from "./Container";
import Grid from "./Grid";
import Button from "./Button";

import SliderHomeImg from "../assets/SliderHomeImg.png";
import CountDownDateDay from "./CountDownDateDay";
import { useNavigate } from "react-router-dom";

const SliderHome = () => {

  const Navigate = useNavigate()

  return (
    <>
      <Container>
        <div className="">
          <Grid className="bg-black grid-cols-1 lg:grid-cols-2 pb-[50px]">
            <div className="py-[69px] pl-[56px] w-[445px] ">
              <span className="text-[#00ff66] text-[16px] font-semibold leading-[20px] ">Categories</span>
              <h3 className="text-[48px] text-white font-semibold !leading-[48px] py-[32px]">Enhance Your Music Experience</h3>
              <div className="my-[20px]">
                <CountDownDateDay 
                  className="!text-[22px] !mt-0 !leading-[25px]  "
                  SecendclassName="w-15 h-15 !pt-3 rounded-full !text-center !leading-[0px] !bg-white "
                />
              </div>
              <Button onClick={()=> Navigate(`/products/101`)}  className="!bg-[#00ff66]">Buy Now</Button>
            </div>
            <div className="shadow-[15px_10px_15px_15px_rgba(217,217,217,0.5)] text-center mx-auto rounded-full  mr-[44px]">
              <img src={SliderHomeImg} alt="" />
            </div>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default SliderHome;
