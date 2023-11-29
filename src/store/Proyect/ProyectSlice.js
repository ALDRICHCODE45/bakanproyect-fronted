import { createSlice } from "@reduxjs/toolkit";
// import { products } from "./products";

export const ProyectSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    products: null,
    errorMessage: null,
  },
  reducers: {
    removeProductsLogOut: (state) => {
      state.products = [];
    },
    loadProducts: (state, { payload }) => {
      state.products = payload;
    },
  },
});
export const { removeProductsLogOut, loadProducts } = ProyectSlice.actions;
