import { createSlice } from "@reduxjs/toolkit";

// Récupérer le token du localStorage, s'il existe
const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: !!token, // Si un token existe, isLoggedIn sera true
  token: token || null, // Stocker le token ou null s'il n'existe pas
  error: null,
  status: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.status = "SUCCESS";
      state.error = null;
      // Enregistrer le token dans le localStorage
      localStorage.setItem("token", action.payload.token);
    },
    loginError: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.status = "ERROR";
      state.error = action.payload.error;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.status = "LOGOUT";
      state.error = null;
      // Retirer le token du localStorage lors de la déconnexion
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, loginError, logout } = authSlice.actions;
export default authSlice.reducer;
