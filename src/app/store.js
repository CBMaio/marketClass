import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import providersReducer from "../features/providers/providersSlice";
import commentsReducer from "../features/comments/commentsSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
    providers: providersReducer,
    comments: commentsReducer,
  },
});
