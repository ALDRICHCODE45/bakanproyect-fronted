import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Auth/AuthSlice";
import {ProyectSlice } from "./Proyect/ProyectSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    proyect: ProyectSlice.reducer,
  },
});
