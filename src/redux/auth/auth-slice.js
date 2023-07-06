import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  currentPage,
  refreshToken,
  updateUser,
} from './authOperation';

const initialState = {
  user: {
    name: null,
    email: null,
    birthday: null,
    phone: null,
    skype: null,
    avatarURL: null,
  },
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
  },
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
      state.isRefreshing = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.accessToken = payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
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
    [updateUser.pending](state) {
      state.isRefreshing = true;
    },
    [updateUser.fulfilled](state, { payload }) {
      state.user = payload;

      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [updateUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
  },
});

export const { resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
