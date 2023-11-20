import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});
