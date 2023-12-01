import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../utils";
import axios from "axios";
import { API_URL } from "../constants";
import axiosInstance from "../../services/AxiosInstance";

const { LOADING, SUCCEEDED, FAILED, IDLE } = FETCH_STATUS;
const COMMENT_URL = `${API_URL}/comment`;

const initialState = {
  data: [],
  status: IDLE,
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    try {
      const response = await axiosInstance.get("/comment");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment) => {
    try {
      await axios.post(COMMENT_URL, comment);
    } catch (error) {
      console.error(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = state.data.concat(action.payload.data);
      });
  },
});

export default commentsSlice.reducer;

export const getCommentsStatus = (state) => state.comments.status;
export const selectAllComments = (state) => state.comments.data;
