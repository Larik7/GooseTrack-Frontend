import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { isToken } from 'redux/auth/selectors';
axios.defaults.baseURL = 'https://goosetrackback.onrender.com/';

export const fetchReviews = createAsyncThunk(
  '/reviews/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `api/reviews?limit=${limit}&page=${page}`
      );
      return data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOwnReviews = createAsyncThunk(
  '/reviews/fetchOwn',
  async (_, thunkAPI) => {
    const token = useSelector(isToken());
    const header = `Authorization: Bearer ${token}`;
    const axiosParams = {
      headers: {
        header,
        'Content-type': 'Application/json',
      },
    };
    try {
      const { data } = await axios.get('api/reviews/own', axiosParams);
      console.log(data);
      return data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    const token = useSelector(isToken());
    const header = `Authorization: Bearer ${token}`;
    const axiosParams = {
      headers: {
        header,
        'Content-type': 'Application/json',
      },
    };
    console.log(token);
    try {
      const { data } = await axios.post('api/reviews/own', axiosParams, review);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    const token = useSelector(isToken());
    const header = `Authorization: Bearer ${token}`;
    const axiosParams = {
      headers: {
        header,
        'Content-type': 'Application/json',
      },
    };
    try {
      const { data } = await axios.delete(`api/reviews/own`, axiosParams);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async ({ id, review }, thunkAPI) => {
    const token = useSelector(isToken());
    const header = `Authorization: Bearer ${token}`;
    const axiosParams = {
      headers: {
        header,
        'Content-type': 'Application/json',
      },
    };
    try {
      const { data } = await axios.patch(
        `api/reviews/own`,
        axiosParams,
        review
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
