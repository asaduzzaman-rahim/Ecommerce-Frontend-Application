import React, { useEffect, useState } from "react";

import Container from "../Component/Container";
import Grid from "../Component/Grid";


import Flex from "../Component/Flex";
import SkeletonDemo from "../Component/SkeletonDemo"

import {CiHeart} from "react-icons/ci"
import {IoEyeOutline} from "react-icons/io5"
import PaginatedItems from "./PaginatedItems";


import { BiSolidCategory } from "react-icons/bi";
import ProductListCart from "../Component/ProductListCart";
import ShopProducts from "../Component/ShopProducts";
import BreadCrumb from "./BreadCrumb";
import { useDispatch } from "react-redux";
import { ProductReducer, CategoryReducer } from "../Products/ProductSlice"; 


const Shop = () => {
  
  const [allProducts, setAllProducts] = useState([]);
  const [selectOption, setSelectOption] = useState(6)
  const [loading, setLoading] = useState(true)
  const [categoryList, setCategoryList] = useState([])
  // const [selectCategory, setSelectCategory]= useState([])

  const dispatch = useDispatch() 
  
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data)=> {
        setAllProducts(data.products)
        dispatch(ProductReducer(data.products))
        setLoading(false)
      })
      // .catch(err => console.log(err))
    },[dispatch])
    
  
    useEffect(()=>{
      const uniqueCatugory = [...new Set(allProducts.map((item)=> item.category))]
      setCategoryList(uniqueCatugory)
    },[allProducts])

   

    const handleCategory = (items)=>{
      const FItemsCategury = allProducts.filter((CItems) => CItems.category === items );
      dispatch(CategoryReducer(FItemsCategury));    
    }


    //  Catugury Part hiden or visibla
      const [show, setShow] = useState(false)
      const handleClick = ()=>{
        setShow(!show)
      }


  return (
    <>
    <div className="py-[30px] md:py-[50px] lg:py-[80px]">
      <Container>
        {/* <Grid className="grid-cols-1 lg:grid-cols-2 !items-start"> */}
        <Flex className="!items-start flex-wrap lg:flex-nowrap lg:!justify-end gap-x-[60px] w-full">

          {/* -----------------Category Section ------------------- */}

          <div className="lg:w-[220px]  w-full">
            <BreadCrumb/>
            <div className=" py-[15px] md:py-[25px] lg:py-[50px]">
              <Flex className="justify-between items-center ">
                <Flex className="justify-between items-center">
                  <h3 className="text-[20px] font-bold text-[#262626]">Shop by Category</h3>
                </Flex>
                <button onClick={handleClick} className="text-[30px] font-bold text-[#262626] cursor-pointer md:hidden"><BiSolidCategory /></button>
              </Flex>
              <div className={` ${show ? "block" : "hidden"} md:block`}>               
                  <ul className={` w-full  text-[16px] lg:py-5 py-2  text-xs lg:text-base lg:space-y-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-x-6 gap-y-1`}>
                    {
                      categoryList.map((items)=>(
                        <li onClick={()=>handleCategory(items) } className="capitalize cursor-pointer">{items}</li>
                      ))
                    }
                  </ul>
              </div>
            </div>
          </div>

          {/* ** ------------- Product list Items----------------- */}
          <div className="w-[100%] lg:!w-80%]">
            <div className="lg:w-[] w-full ">
              <div className="flex items-center gap-2 pb-4 lg:pb-8 ">
                <div className="w-full flex gap-3 items-center justify-end">
                <h4 className="text-[16px]">Show:</h4>
                  <select id="#" onChange={(e)=> setSelectOption(e.target.value) }
                          className="border-1 border-hide rounded-md  px-7 py-1">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <Flex className="items-center gap-[20px] md:gap-[15px] lg:gap-[40px] flex-wrap justify-center lg:justify-start">
              
                { 
                loading ?
                
                  Array.from({ length: Number(selectOption) }).map((_, id) => {
                      return <SkeletonDemo key={id} />;
                    })
                  :
                  <PaginatedItems itemsPerPage={selectOption}/>
              }
              </Flex>
            </div>
          </div>
        
        </Flex>
        {/* </Grid> */}
      </Container>
    </div>
    </>
  );
};

export default Shop;
