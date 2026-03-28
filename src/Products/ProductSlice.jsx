import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
}

export const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.product = action.payload
    },
    CategoryReducer: (state, action) => {
      state.product = action.payload    
    },
    CartReducer: (state, action) => {
      state.cart = [...state.cart, action.payload]
      localStorage.setItem("cart", JSON.stringify([...state.cart])) 
    },
    RemoveReducer: (state, action) => {
      state.cart.splice(action.payload.id, 1)
      localStorage.setItem("cart", JSON.stringify([...state.cart])) 
    }
  },
})

export const { ProductReducer, CategoryReducer, CartReducer, RemoveReducer } = ProductSlice.actions

export default ProductSlice.reducer