import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
};

const userSlice = createSlice({
  name: "profilUser",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
