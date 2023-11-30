import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, getUserData } from "./authActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const userInfo = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const initialState = {
  isAuthenticated: !!userToken,
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");
      state.isAuthenticated = false;
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      // login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userToken = payload.userToken;
        state.isAuthenticated = true;
        state.userInfo = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // register user
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.auth.error = payload;
      })
      //user data
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.userInfo = payload.data;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserInfo = (state) => state.auth.userInfo;
