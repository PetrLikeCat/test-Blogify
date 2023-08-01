import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
type commentPost = {
  id: number;
  userId?: number;
};
type commentsType = {
  comment: comment[] | null;
  loading: boolean;
  error: string | null;
};
const initialState: commentsType = {
  comment: null,
  loading: false,
  error: null,
};
interface MyPayloadAction<T> extends PayloadAction<T> {
  // Поле payload будет иметь тип T
}
export const fetchSliceCommit = createAsyncThunk<
  commentsType,
  string,
  { rejectValue: string }
>("comment/fetchComment", async (id, { rejectWithValue }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

export const newPost = createAsyncThunk<
  commentPost,
  any,
  { rejectValue: string }
>(
  "comment/fecthPost",
  async function ({ id, body, name, email, userId }, { rejectWithValue }) {
    const commentAdd = {
      id: userId,
      userId: userId,
      body: body,
      name: name,
      email: email,
    };
    console.log(commentAdd, "commentAdd");
    const respond = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentAdd),
      }
    );
    if (!respond.ok) {
      return rejectWithValue("");
    }
    return (await respond.json()) as comment;
  }
);

const sliceCommits = createSlice({
  name: "comment",
  initialState,
  reducers: {},

  extraReducers: (boiunding) => {
    boiunding.addCase(fetchSliceCommit.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    boiunding.addCase(
      fetchSliceCommit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.comment = action.payload;
        state.loading = false;
      }
    );
    boiunding.addCase(fetchSliceCommit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unknown error";
    });

    boiunding.addCase(newPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    boiunding.addCase(
      newPost.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.comment?.push(action.payload);
      }
    );
    boiunding.addCase(newPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

export default sliceCommits.reducer;
