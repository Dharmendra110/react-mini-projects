import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const data = await response.json();
    return data.products;
  } catch (err) {
    console.error(err);
  }
});

function getData() {
  try{
  const saveData = localStorage.getItem("products");
  return saveData? JSON.parse(saveData): [];
  }catch(err){
    console.error('Invalid JSON in localStorage',err)
    localStorage.removeItem('products')
    return []
  }
}

function saveData(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

const initialState = {
  items: [],
  cart: getData(),
  loading: false,
  error: null,
  status: undefined,
};

const productSlice = createSlice({
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
    update: (state, action) => {
      const { id, quantity } = action.payload;
      const newData = state.cart.find((item) => item.id === id);
      if (newData) {
        newData.quantity = quantity > 0 ? quantity : 1;
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
        ((state.status = "pending"), (state.loading = true));
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        ((state.status = "successfull"), (state.loading = false));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { add, remove, update, clear } = productSlice.actions;
export default productSlice.reducer;
