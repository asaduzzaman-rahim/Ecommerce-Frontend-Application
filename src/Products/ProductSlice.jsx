import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
  cart: [],
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
    }
  },
})

export const { ProductReducer, CategoryReducer, CartReducer } = ProductSlice.actions

export default ProductSlice.reducer