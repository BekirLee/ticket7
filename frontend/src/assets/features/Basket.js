import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const findedProduct = state.items.find(
        (item) => item._id == action.payload._id
      );

      if (!findedProduct) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        findedProduct.count += 1;
      }
    },
    plusBtn: (state, action) => {
      const findedProduct = state.items.find(
        (item) => item._id == action.payload._id
      );

      if (findedProduct) {
        findedProduct.count += 1;
      }
    },
    minusBtn: (state, action) => {
      const findedProduct = state.items.find(
        (item) => item._id == action.payload._id
      );

      if (findedProduct.count >= 1) {
        findedProduct.count -= 1;
      }
    },
    removeBasket: (state, action) => {
      state.items = state.items.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addBasket, minusBtn, plusBtn, removeBasket } =
  basketSlice.actions;

export default basketSlice.reducer;
