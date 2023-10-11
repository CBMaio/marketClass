import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchRequests = createAsyncThunk(
  "requests/fetchRequests",
  async () => {
    const response = [];
    return response;
  }
);

export const addNewRequest = createAsyncThunk(
  "courses/addNewRequest",
  async (initialRequest) => {
    const response = {
      ...initialRequest,
      id: nanoid(),
      state: "pending",
    };
    return response;
  }
);

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRequests.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(addNewRequest.fulfilled, (state, action) => {
        state.data.concat(action.payload);
      });
  },
});

export default requestsSlice.reducer;

export const selectAllRequests = (state) => state.requests.data;
