import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../projects/counter app/counterSlice'
// import ProductSlice from '../shopping cart/store/ProductSlices.js'
const store = configureStore({

  reducer:{
    // products: ProductSlice,
    counter:counterSlice
  }
})

export default store
