import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
    // admin: adminReducer,
    // comments: commentsReducer,
  },
});
