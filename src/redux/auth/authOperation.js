import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setToken = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const claerToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/registration', data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('/api/auth/login', data);

      setToken(res.data.accessToken);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      await axios.post('api/auth/logout', data);
      claerToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentPage = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return thunkAPI.rejectWithValue('We dont have a token');
    }

    try {
      setToken(accessToken);
      const res = await axios.get('api/auth/current');
      console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
