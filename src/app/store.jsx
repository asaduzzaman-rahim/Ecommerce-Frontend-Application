import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Products/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
})


export default store