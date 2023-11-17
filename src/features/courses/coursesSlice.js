import {
  createSlice,
  createAsyncThunk,
  nanoid,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_STATUS } from "../../utils";

const { LOADING, IDLE, SUCCEEDED, FAILED } = FETCH_STATUS;

const COURSES_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  data: [],
  status: IDLE,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      // const response = await axios.get(POST_URL);

      // TODO delete fake response
      const response = await axios.get("data.json");
      return [...response.data];
    } catch (error) {
      console.error(error);
    }
  }
);

export const addNewCourse = createAsyncThunk(
  "courses/addNewCourse",
  async (initialCourse) => {
    try {
      const response = await axios.post(COURSES_URL, initialCourse);
      return response.data;
    } catch (error) {
      console.error(error);
    }
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
        state.status = LOADING;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      })
      .addCase(addNewCourse.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data.push(action.payload);
      });
  },
});

export const { courseAdded, courseUpdated } = coursesSlice.actions;

export default coursesSlice.reducer;

export const selectAllCourses = (state) => state.courses.data;
export const selectCourseById = (state, courseId) =>
  state.courses.data.find((course) => `${course.id}` === courseId);
export const getCoursesStatus = (state) => state.courses.status;

export const selectCoursesByAuthor = createSelector(
  [selectAllCourses, (state, authorId) => authorId],
  (courses, authorId) =>
    courses.filter((course) => `${course.author.id}` === authorId)
);
