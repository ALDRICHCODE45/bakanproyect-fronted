import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";

export const ProyectSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    status: "not-authenticated", // 'checking' | 'authenticated | 'not-authenticated
    products: products,
    errorMessage: null,
  },
  reducers: {},
});
export const {} = ProyectSlice.actions;
