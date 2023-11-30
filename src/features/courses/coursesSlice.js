import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_STATUS } from "../../utils";
import { API_URL } from "../constants";

const { LOADING, IDLE, SUCCEEDED, FAILED } = FETCH_STATUS;

const BASE_URL = "course";

const initialState = {
  data: [],
  status: IDLE,
  error: null,
  courseSelected: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const { data } = await axios.get(`${API_URL}/${BASE_URL}/`);
      return [...data.data];
    } catch (error) {
      console.error(error);
    }
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      console.log(data);
      return [...data.data];
    } catch (error) {
      console.error(error);
    }
  }
);

export const addNewCourse = createAsyncThunk(
  "courses/addNewCourse",
  async (initialCourse) => {
    try {
      const response = await axios.post(BASE_URL, initialCourse);
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
export const selectCourseById = (state, courseId) => {
  return state.courses.data.find(({ _id: id }) => id === courseId);
};

export const getCoursesStatus = (state) => state.courses.status;

export const selectCoursesByAuthor = createSelector(
  [selectAllCourses, (state, authorId) => authorId],
  (courses, authorId) =>
    courses.filter((course) => `${course.author.id}` === authorId)
);
