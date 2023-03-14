import userReducer from "./slice/userSlice";
import postReducer from "./slice/postSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
