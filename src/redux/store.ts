import { configureStore } from "@reduxjs/toolkit";
import slicePost from "./slicePost";
import sliceFullPost from "./sliceFullPost";
import sliceComment from "./sliceCommit";
export const store = configureStore({
  reducer: {
    post: slicePost,
    fullPost: sliceFullPost,
    comment: sliceComment,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
