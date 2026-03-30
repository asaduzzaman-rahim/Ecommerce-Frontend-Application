import React from "react";
import SecHeading from "./SecHeading";
import Container from "./Container";
import Flex from "./Flex";
import ProductListCart from "./ProductListCart";
import Button from "./Button";
import { useSelector } from 'react-redux'

import {CiHeart} from "react-icons/ci"
import {IoEyeOutline} from "react-icons/io5"



import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import productimg from "../assets/ProductImage.jpg"
import CountDownDateDay from "./CountDownDateDay";


const FreshSales = () => {
  const allProducts = useSelector((state)=> state.product.product)
 

  const navigate = useNavigate()

      function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
              />
            );
          }

      function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
              <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
              />
            );
          }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
  };
  return (
    <>
      <section className="my-[30px] lg:mt-[120px] lg:mb-[70px] !md:mt-[50px] md:mb-[40px] ">
        <Container>
        <div>
          <Flex className="items-end md:gap-[150px]">
            <SecHeading tittle="Today's " heading="Flash Sales" />
            <CountDownDateDay/>
          </Flex>

          <div className="mt-[40px] mb-[60px] ">
            <Slider {...settings}>

              {
                allProducts.slice(0,9).map((item,id)=>{
                  return(
                    <ProductListCart 
                        key={id}
                        id={item.id}
                        Discount={item.discountPercentage}
                        ProductImage={item.thumbnail}
                        Heading={item.title}
                        MainPrice={Math.floor(item.price / (1 - item.discountPercentage / 100))}
                        DiscountPrice={item.price}
                        totalreview={item.rating}
                        value={item.rating}
                />
                  )
                })
              }
                
                
            </Slider>
          </div>

               
            
          <div className="text-center">
            <Button onClick={()=> navigate("/shop")} className="text-center">View All Products</Button>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
};

export default FreshSales;
