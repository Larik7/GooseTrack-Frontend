import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentPage,
  refreshToken,
} from './authOperation';

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
    [register.pending](state) {
      state.isLoggedIn = false;
    },
    [register.fulfilled](state, { payload }) {
      state.accessToken = payload.accessToken;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },
    [logIn.pending](state) {
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.accessToken = payload.accessToken;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
    },
    [logOut.pending](state) {
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
    [currentPage.fulfilled](state, { payload }) {
      state.user = payload;

      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [currentPage.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [refreshToken.pending](state) {
      state.isRefreshing = true;
    },
    [refreshToken.fulfilled](state, { payload }) {
      state.accessToken = payload.refreshToken;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refreshToken.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
