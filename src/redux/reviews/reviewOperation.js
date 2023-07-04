import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://goosetrackback.onrender.com/';
const setToken = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
export const fetchReviews = createAsyncThunk(
  '/reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/reviews`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnReviews = createAsyncThunk(
  '/reviews/fetchOwn',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken);
      const { data } = await axios.get('api/reviews/own');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken);
      const { data } = await axios.post('api/reviews/own', review);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken);
      const { data } = await axios.delete(`api/reviews/own`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async (review, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken);
      const { data } = await axios.patch(`api/reviews/own`, review);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
