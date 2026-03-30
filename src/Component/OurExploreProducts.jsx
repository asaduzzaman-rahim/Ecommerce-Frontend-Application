import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import ProductListCart from "./ProductListCart";
import Button from "./Button";
import Flex from "./Flex";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


const OurExploreProducts = () => {


  const allProducts = useSelector((state)=> state.product.product)

  const navigate = useNavigate()

  return (
    <>
      <section className="pt-[70px] pb-[140px]">
        <Container>
          <SecHeading tittle="Our Products" heading="Explore Our Products" />
          <div className="my-[40px]">
            <Flex className="flex justify-center flex-wrap gap-[30px] ">
              {
                allProducts.slice(0,8).map((item,id)=>{
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
            </Flex>
          </div>
          <div className="text-center">
            {/* <NavLink to={"/shop"}> */}
              <Button onClick={()=> navigate("/shop")}>View All Products</Button>
            {/* </NavLink> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurExploreProducts;
