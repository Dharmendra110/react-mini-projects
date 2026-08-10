import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://dummyjson.com/products";
export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error(error);
  }
});

function getData() {
  const data = localStorage.getItem("products");
  return data ? JSON.parse(data) : [];
}

function saveData(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

const initialState = {
  data: [],
  cart: getData(),
  status: undefined,
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      state.cart.push(action.payload);
      saveData(state.cart);
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveData(state.cart);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity > 0 ? quantity : 1;
      }
      saveData(state.cart);
    },

    clear: (state) => {
      state.cart = [];
      saveData(state.cart);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "Pending";
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "Succeeded";
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { add, remove, clear, updateQuantity } = ProductSlice.actions;
export default ProductSlice.reducer;
