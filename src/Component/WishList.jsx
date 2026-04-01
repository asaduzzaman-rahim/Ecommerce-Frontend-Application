import React from 'react'
import Container from '../Component/Container'
import Button from "../Component/Button"
import Flex from "../Component/Flex"
import WishListProductCart from "../Component/WishListProdtCart"
import RelatedProductList from '../Component/RelatedProductList'
import SecHeading from "../Component/SecHeading"

// import productimg from "../assets/ProductImage.jpg"
import BreadCrumb from './BreadCrumb'
import { useSelector } from 'react-redux'

 
const WishList = () => {

  const WishListProducts = useSelector((state)=>state.product.wishlist)


  return (
    <>
      <Container>
        <div className='py-[10px] md:py-[40px] lg:py-[80px]'>
            <BreadCrumb/>
          <Flex className="justify-between items-center">
            <span>Wishlist ({WishListProducts.length})</span>
            <Button className="!bg-white !text-black border-1 border-hide">Move All To Bag</Button>
          </Flex>
          <Flex className="gap-[30px] items-center flex-wrap justify-center md:justify-start mt-[40px]">
            {
              WishListProducts.map((item)=>{
                return(
                  <WishListProductCart key={item?.id}
                    id={item?.id}
                    products={item}
                    ProductImage={item?.thumbnail}
                    Discount={item?.discountPercentage}
                    Heading={item?.title}
                    MainPrice={Math.floor(item?.price / (1 - item?.discountPercentage / 100))}
                    DiscountPrice={item?.price}
                  />
                )
              })
            }
             
          </Flex>

          {/* Related Product List Section Start */}
          <div className='mt-[80px]'>
            <Flex className=' items-center justify-between pb-[60px]'>
              <SecHeading tittle="Just For You"/>  
              <Button  className="!bg-white !text-black border-1 border-hide">See All</Button>            
            </Flex>
            <RelatedProductList/>
          </div>
          {/* Related Product List Section End */}
          
        </div>
      </Container>
    </>
  )
}

export default WishList
