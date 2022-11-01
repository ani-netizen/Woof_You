import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGN_UP: (state, action) => {
      state.user = action.payload;
    },
    LOG_IN: (state, action) => {
      state.user = action.payload;
    },
    LOG_OUT: () => {
      return { ...initialState };
    },
  },
});

export default authSlice;
