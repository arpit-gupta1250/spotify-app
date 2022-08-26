import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "AuthSlice",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;