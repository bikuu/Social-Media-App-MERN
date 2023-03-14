import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { setPosts } = userSlice.actions;

export default userSlice.reducer;
