import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import Button from "./Button";
import Flex from "./Flex";
import ProductListCart from "./ProductListCart";
import { useSelector } from 'react-redux'


const BestSellingProductSection = () => {
    const allProducts = useSelector((state)=> state.product.product)

  return (
    <>
      <section className="mt-[70px] mb-[140px]">
        <Container>
          <Flex className="justify-between items-end mb-[60px]">
            <SecHeading tittle="This Month " heading="Best Salling Products" />
            <Button>View All</Button>
          </Flex>
          <Flex className=" flex-wrap justify-center gap-[30px]">

            {
              allProducts.slice(0,4).map((item,id)=>{
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
        </Container>
      </section>
    </>
  );
};

export default BestSellingProductSection;
