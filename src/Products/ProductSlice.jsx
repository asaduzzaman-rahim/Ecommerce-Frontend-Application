import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  wishlist: localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [],
}

export const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.product = action.payload
      localStorage.setItem("products", JSON.stringify(state.product)) 
    },
    CategoryReducer: (state, action) => {
      state.product = action.payload    
      localStorage.setItem("products", JSON.stringify([...state.product])) 
    },
    CartReducer: (state, action) => {
      const index = state.cart.findIndex((item)=> item.id === action.payload)
      if (index == -1) {
        state.cart = [...state.cart, action.payload]
        localStorage.setItem("cart", JSON.stringify([...state.cart])) 
      }else {
        null
    }   
      } ,
    RemoveReducer: (state, action) => {
      state.cart.splice(action.payload.id, 1)
      localStorage.setItem("cart", JSON.stringify([...state.cart])) 
    },
    WishlistReducer: (state, action) => {
      const index = state.cart.findIndex((item)=> item.id === action.payload)
      if (index == -1) {
        state.wishlist = [...state.wishlist, action.payload]
        localStorage.setItem("wishlist", JSON.stringify([...state.wishlist])) 
      } else {
        null
      }
    },
    RemoveWishListReducer: (state, action)=>{
      state.wishlist.splice(action.payload.index, 1)
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist])) 
    }
  },
})

export const { ProductReducer, CategoryReducer, CartReducer, RemoveReducer, WishlistReducer, RemoveWishListReducer } = ProductSlice.actions

export default ProductSlice.reducer