import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";


const ProductStore = configureStore({
  reducer: {
    products: ProductSlice

  }
})

export default ProductStore