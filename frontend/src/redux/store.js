import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
