import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/api/products/";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get(url);
    // console.log(response);
    return response.data;
  }
);

const initialState = {
  products: [],
  allProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      state.products = state.allProducts.filter((item) =>
        item.name.toLowerCase().includes(action.payload.trim().toLowerCase())
      );
    },

    sortAZ: (state, action) => {
      state.products = [...state.products].sort((a, b) => {
        a.name.localeCompare(b.name);
      });
    },
    sortZA: (state, action) => {
      state.products = [...state.products].sort((a, b) => {
        b.name.localeCompare(a.name);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
  },
});

export const { searchProducts, sortAZ, sortZA } = productSlice.actions;

export default productSlice.reducer;
