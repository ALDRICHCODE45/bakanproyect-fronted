import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    status: "not-authenticated", // 'checking' | 'authenticated | 'not-authenticated
    user: {},//password, rol, userName
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload
      state.errorMessage = null;
    },
    logOut: (state, { payload }) => {
      state.status = "not-authenticated"; // 'checking' | 'authenticated'
      state.user = {} 
      state.errorMessage = payload?.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});
export const { login, logOut, checkingCredentials} =
  AuthSlice.actions;
