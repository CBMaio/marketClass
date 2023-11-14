import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/coursesSlice";
import authorsReducer from "../features/authors/authorsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import requestsReducer from "../features/requests/requestsSlice";
import userReducer from "../features/user/userSlice";
import authReducer from "../features/auth/authSlice";

export default configureStore({
  reducer: {
    courses: coursesReducer,
    authors: authorsReducer,
    comments: commentsReducer,
    requests: requestsReducer,
    user: userReducer,
    auth: authReducer,
  },
});
