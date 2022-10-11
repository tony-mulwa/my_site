import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: false,
};

const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loading = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
