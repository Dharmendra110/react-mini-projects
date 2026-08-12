import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../projects/counter app/counterSlice'
import todoSlice from '../projects/todo app/todoSlice'
import productSlice from '../features/products/productSlice'
const store = configureStore({

  reducer:{
    // products: ProductSlice,
    counter:counterSlice,
    todos:todoSlice,
    products: productSlice
  }
})

export default store
