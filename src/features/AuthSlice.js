import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const TestEmail = "msaud@gmail.com";
      const TestPassword = "123";
      const { email, password } = action.payload;
      
      if (email === TestEmail && password === TestPassword) {
        state.isAuthenticated = true;
        state.user = { email,password };
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email,password}));
      }
    },
    logout: (state,action) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    },
  
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
