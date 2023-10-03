import {
  createSlice,
  createAsyncThunk,
  nanoid,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get("data.json");
    return response.data;
  }
);

export const addNewCourse = createAsyncThunk(
  "courses/addNewCourse",
  async (initialCourse) => {
    const response = {
      ...initialCourse,
      id: nanoid(),
    };
    return response;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    courseUpdated(state, action) {
      const { id, title, description } = action.payload;
      const existingCourse = state.data.find((course) => `${course.id}` === id);
      if (existingCourse) {
        existingCourse.title = title;
        existingCourse.description = description;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewCourse.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export const { courseAdded, courseUpdated } = coursesSlice.actions;

export default coursesSlice.reducer;

export const selectAllCourses = (state) => state.courses.data;

export const selectCourseById = (state, courseId) =>
  state.courses.data.find((course) => `${course.id}` === courseId);

export const selectCoursesByAuthor = createSelector(
  [selectAllCourses, (state, authorId) => authorId],
  (courses, authorId) =>
    courses.filter((course) => `${course.author.id}` === authorId)
);
