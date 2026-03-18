import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
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
    }
  },
})

export const { ProductReducer, CategoryReducer } = ProductSlice.actions

export default ProductSlice.reducer