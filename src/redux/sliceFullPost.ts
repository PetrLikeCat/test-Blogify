import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
type postState = {
  post: User | null;
  loading: boolean;
  error: string | null;
};
const initialState: postState = {
  post: null,
  loading: false,
  error: null,
};

export const fetchFullPost = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>("post/fetchFullPost", async (id, { rejectWithValue }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();
  return data;
});

const sliceFullPost = createSlice({
  name: "post",
  initialState,
  reducers: {},

  extraReducers: (boiunding) => {
    boiunding.addCase(fetchFullPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    boiunding.addCase(
      fetchFullPost.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.post = action.payload;
        state.loading = false;
      }
    );
    boiunding.addCase(fetchFullPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unknown error";
    });
  },
});

export const {} = sliceFullPost.actions;

export default sliceFullPost.reducer;
