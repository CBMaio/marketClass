import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./authActions";

// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

const initialState = {
  isAuthenticated: false,
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      // localStorage.removeItem("userToken");
      state.isAuthenticated = false;
      // state.loading = false;
      // state.userInfo = null;
      // state.userToken = null;
      // state.error = null;
    },
  },
  extraReducers: {
    // login user
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userToken = payload.userToken;
      state.isAuthenticated = true;
      state.userInfo = payload;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.isAuthenticated = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
