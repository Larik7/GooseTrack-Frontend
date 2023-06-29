import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goosetrackback.onrender.com/api/';

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
      const res = await axios.post('/auth/registration', data);
      //   console.log('registration', res);
      //   setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/auth/login', data);

    setToken(res.data.accessToken);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {
    try {
      await axios.post('/users/logout', data);
      claerToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentPage = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    console.log(state);
    const accessToken = state.auth.accessToken;
    if (accessToken === null) {
      return thunkAPI.rejectWithValue('We dont have a token');
    }

    try {
      setToken(accessToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
