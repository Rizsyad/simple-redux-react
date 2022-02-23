import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/postSlice";

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
