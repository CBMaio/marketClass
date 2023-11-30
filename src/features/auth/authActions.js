import { useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const AUTH_API = `${API_URL}/users`;
const SIGNUP = "signup";
const LOGIN = "login";
const USER = "user";

export const registerUser = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(`${AUTH_API}/${SIGNUP}`, { ...user }, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserData = createAsyncThunk(
  "auth/user",
  async ({ token }, { rejectWithValue }) => {
    try {
      if (!token) return;
      const response = await axios.get(`${AUTH_API}/${USER}`, {
        headers: { "x-access-token": token },
      });

      if (response.status === 200) {
        const data = JSON.stringify(response?.data?.data);

        localStorage.setItem("userData", data);
      }

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${AUTH_API}/${LOGIN}`,
        { ...user },
        config
      );

      localStorage.setItem("userToken", data.loginUser.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("userToken"));
};
