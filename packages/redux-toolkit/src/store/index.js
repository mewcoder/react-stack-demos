import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import postsReducer from "../posts/postsSlice";

export default configureStore({
  reducer: { counter: counterReducer, posts: postsReducer },
});
