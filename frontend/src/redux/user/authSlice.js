import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  error: null,
  status: null,
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.status = "SUCCESS";
      state.error = null;
    },
    loginError: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.status = "ERROR";
      state.error = action.payload.error;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.status = "LOGOUT";
      state.error = null;
    },
  },
});

export const { loginSuccess, loginError, logout } = authSlice.actions;
export default authSlice.reducer;
