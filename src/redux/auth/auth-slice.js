import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, currentPage } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, _) {
      state.isLoggedIn = false;
    },
    [register.fulfilled](state, action) {
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },
    [logIn.pending](state, _) {
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },
    [logOut.pending](state, _) {
      state.isLoggedIn = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },
    [currentPage.pending](state) {
      state.isRefreshing = true;
    },
    [currentPage.fulfilled](state, action) {
      state.user = action.payload;

      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [currentPage.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
