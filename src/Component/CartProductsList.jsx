import React from 'react'

const CartProductsList = () => {
  return (
    <>
        <table className="w-full text-sm text-left rtl:text-right text-body ">
            <thead className="text-sm text-body border-1 border-indigo-400 shadow-hide py-[20px] ">
              <tr>
                <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base font-bold w-[50%]">Product</th>
                <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base font-bold w-[20%]">Price</th>
                <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base font-bold w-[10%]">Quantity</th>
                <th scope="col" className="md:px-6 py-3 text-[16px] rounded-e-base text-right font-bold w-[20%]">Subtotal</th>
              </tr>
            </thead>
              <tbody>
              {
                CartProducts.map((items, index)=>{
                  return(
                    <tr  key={index} className='py-[20px]'>
                        
                        <td className="px-2 py-2  text-[14px] font-medium !w-[50%]">
                          <div className='flex items-center gap-[20px] relative'> 
                            <img className="w-[54px] border-1 border-hide rounded-[10px]" src={items?.thumbnail} alt="cart photo" /> <p>{items?.title}</p>
                            <ImCross
                              onClick={()=> handleDelete(index)}
                              className='absolute top-[0%] left-[-2%] p-1 bg-red-500 text-white text-xl rounded-full cursor-pointer'/>
                          </div>
                        </td>
                        <td className='md:px-6 py-2 text-[14px] font-medium w-[5%]'>
                          <p>${items?.price}</p>
                        </td>
                        <td className='md:px-6 py-2 text-[14px] font-medium w-[10%]'>
                            <Flex className='p-1 max-w-[51px] border-1 border-hide rounded-[5px] justify-between items-center'>
                                <span className='w-[80%] text-[16px] text-center'>{countNumber}</span>
                                <div  className='w-[20%] mr-2 space-y-[5px]'>
                                    <IoIosArrowUp onClick={ProductsAdd}  className='text-[18px] cursor-pointer' />
                                    <IoIosArrowDown onClick={ProductsRemove}  className='text-[18px] cursor-pointer' />
                                </div>
                            </Flex>
                        </td>
                        <td className='md:px-6 py-2 text-[14px] font-medium w-[20%] text-right'>
                          <p>${items?.price * countNumber}</p>
                        </td>
                      </tr>                        
                  )
                })
              }
              </tbody>
        
          </table> 
    </>
  )
}

export default CartProductsList
