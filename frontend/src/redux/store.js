import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/authSlice";
import profilReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    profilUser: profilReducer,
  },
});
