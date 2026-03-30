import React from 'react'
import Container from './Container'
import Flex from './Flex'
import ProductListCart from "./ProductListCart"
import { useSelector } from 'react-redux'


const RelatedProductList = () => {
  
  const allProducts = useSelector((state)=> state.product.product)
  
  return (
    <>
      <Container>
        <Flex className="flex flex-wrap justify-center gap-[30px]" >
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
    </>
  )
}

export default RelatedProductList
