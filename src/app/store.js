import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import authorsReducer from "../features/authors/authorsSlice";
import commentsReducer from "../features/comments/commentsSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
    authors: authorsReducer,
    comments: commentsReducer,
  },
});
