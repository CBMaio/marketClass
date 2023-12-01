import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_STATUS } from "../../utils";
import { API_URL } from "../constants";
import axiosInstance from "../../services/AxiosInstance";

const { LOADING, IDLE, SUCCEEDED, FAILED } = FETCH_STATUS;

const COURSE_BASE_URL = `${API_URL}/course`;
const BASE_URL = "course";

const initialState = {
  data: [],
  status: IDLE,
  error: null,
  courseSelected: null,
  myCourses: {
    status: IDLE,
    data: [],
    error: null,
    myCourseSelected: null,
    unpublishedCourses: {
      status: IDLE,
      data: [],
      error: null,
    },
  },
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    try {
      const { data } = await axios.get(`${COURSE_BASE_URL}/`);
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
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "x-access-token",
          "x-access-token": token,
        },
      };

      const response = await axios.post(
        `${COURSE_BASE_URL}`,
        initialCourse,
        config
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchMyCourses = createAsyncThunk(
  "courses/getMyCourses",
  async () => {
    try {
      const response = await axiosInstance.get("/course/my", {
        params: { state: "published" },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchMyCoursesUnpublished = createAsyncThunk(
  "courses/fetchMyCoursesUnpublished",
  async () => {
    try {
      const response = await axiosInstance.get("course/my", {
        params: { state: "unpublished" },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchMyCourseById = createAsyncThunk(
  "courses/myCourse",
  async (id) => {
    try {
      const response = await axiosInstance.get(`/course/my/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateMyCourseById = createAsyncThunk(
  "courses/updateMyCourse",
  async (course) => {
    try {
      const response = await axiosInstance.put(`/course/${course._id}`, course);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (course) => {
    try {
      const response = await axiosInstance.delete(`/course/${course}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const unpublishCourseAction = createAsyncThunk(
  "courses/unpublish",
  async (id) => {
    try {
      const data = { state: "unpublished" };
      const response = await axiosInstance.put(`/course/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const publishCourseAction = createAsyncThunk(
  "courses/publish",
  async (id) => {
    try {
      const data = { state: "published" };
      const response = await axiosInstance.put(`/course/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      })
      // my courses
      .addCase(addNewCourse.fulfilled, (state, action) => {
        state.myCourses.status = IDLE;
      })
      .addCase(fetchMyCourses.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          state.myCourses.status = SUCCEEDED;
          state.myCourses.data = payload.data;
        }
      })
      .addCase(fetchMyCourses.pending, (state, { payload }) => {
        state.myCourses.status = LOADING;
      })
      .addCase(fetchMyCourses.rejected, (state, action) => {
        state.myCourses.status = FAILED;
        state.myCourses.error = action.error.message;
      })
      .addCase(fetchMyCourseById.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.myCourses.myCourseSelected = action.payload.data[0];
        }
      })
      .addCase(updateMyCourseById.pending, (state, action) => {
        state.myCourses.status = LOADING;
      })
      .addCase(updateMyCourseById.fulfilled, (state, action) => {
        state.myCourses.status = IDLE;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.myCourses.status = IDLE;
      })
      .addCase(fetchMyCoursesUnpublished.pending, (state) => {
        state.myCourses.unpublishedCourses.status = LOADING;
      })
      .addCase(fetchMyCoursesUnpublished.fulfilled, (state, { payload }) => {
        state.myCourses.unpublishedCourses.data = payload.data;
        state.myCourses.unpublishedCourses.status = SUCCEEDED;
      })
      .addCase(unpublishCourseAction.pending, (state) => {
        state.myCourses.status = LOADING;
      })
      .addCase(unpublishCourseAction.fulfilled, (state) => {
        state.myCourses.status = IDLE;
      })
      .addCase(publishCourseAction.pending, (state) => {
        state.myCourses.unpublishedCourses.status = LOADING;
      })
      .addCase(publishCourseAction.fulfilled, (state) => {
        state.myCourses.unpublishedCourses.status = IDLE;
      });
  },
});

export const { courseAdded } = coursesSlice.actions;

export default coursesSlice.reducer;

export const selectAllCourses = (state) => state.courses.data;
export const selectCourseById = (state, courseId) => {
  return state.courses.data.find(({ _id: id }) => id === courseId);
};
export const selectedCourse = (state) =>
  state.courses.myCourses.myCourseSelected;

export const getCoursesStatus = (state) => state.courses.status;
export const getUnpublishedCoursesStatus = (state) =>
  state.courses.myCourses.unpublishedCourses.status;
export const getUnpublishedCourses = (state) =>
  state.courses.myCourses.unpublishedCourses.data;
export const selectCoursesByAuthor = (state, authorId) => {
  return state.courses.data.filter(({ author }) => author._id === authorId);
};

// export const selectCoursesByAuthor = createSelector(
//   [selectAllCourses, (state, authorId) => authorId],
//   (courses, authorId) =>
//     courses.filter((course) => `${course.author.id}` === authorId)
// );
