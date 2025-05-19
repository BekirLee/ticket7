import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../assets/features/Basket";
import productsReducer from "../assets/features/Products";

export default configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
});
