import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.lastName;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
