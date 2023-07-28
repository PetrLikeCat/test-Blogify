import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type todo = {
  id: string;
  title: string;
  body: string;
};

type postState = {
  list: todo[];
  loading: boolean;
  error: string | null;
};

const initialState: postState = {
  list: [],
  loading: false,
  error: null,
};
export const fetchPost = createAsyncThunk<
  todo[],
  undefined,
  { rejectValue: string }
>("post/fetchPost", async (_, { rejectWithValue }) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

const slicePost = createSlice({
  name: "post",
  initialState,
  reducers: {},

  extraReducers: (boiunding) => {
    boiunding.addCase(fetchPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    boiunding.addCase(
      fetchPost.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.list = action.payload;
        state.loading = false;
      }
    );
  },
});

export const {} = slicePost.actions;

export default slicePost.reducer;
