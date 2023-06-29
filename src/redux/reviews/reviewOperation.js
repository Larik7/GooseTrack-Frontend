import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://goosetrackback.onrender.com/';
// const setToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`reviews?limit=${limit}&page=${page}`);
      return data.data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchOwnReviews = createAsyncThunk(
  'reviews/fetchOwn',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('reviews/own');
      return data.data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const { data } = await axios.post('/reviews/own', review);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/reviews/own/`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async ({ id, review }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/reviews/own/${id}`, review);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
