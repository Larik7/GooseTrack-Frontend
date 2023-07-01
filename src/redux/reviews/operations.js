// Import
import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';


// Export fetchAllReviews
export const fetchAllReviews = createAsyncThunk(
  'reviews/fetchAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews?page=1&limit=10');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Export fetchUserReviews
export const fetchUserReviews = createAsyncThunk(
  'reviews/fetchUserReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews/my-reviews?limit=30');
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Export fetchUserReviewById
export const fetchUserReviewById = createAsyncThunk(
  'reviews/fetchUserReviewById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/reviews/my-reviews/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Export addReview
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rating, comment }, thunkAPI) => {
    try {
      const response = await instance.post('/reviews/my-reviews', {
        rating,
        comment,
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Export deleteReview
export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/reviews/my-reviews/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// Export updateReview
export const updateReview = createAsyncThunk(
  'reviews/updateReviews',
  async ({ id, rating, comment }, thunkAPI) => {
    try {
      const response = await instance.put(`/reviews/my-reviews/${id}`, {
        rating,
        comment,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);