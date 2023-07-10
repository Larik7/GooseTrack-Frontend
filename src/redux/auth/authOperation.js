import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

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
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerify = createAsyncThunk(
  'auth/verify',
  async (email, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/verify', { email });
      toast.success('Verification resend to your e-mail');
      return res.data;
    } catch (error) {
      toast.error('Sumthing wrong click again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'api/auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/login', data);

      setToken(res.data.accessToken);

      return res.data;
    } catch (error) {
      alert('Incorrect email or password');

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

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('api/auth/refresh', { data });
      const { accessToken, refreshToken } = response.data;

      setToken(refreshToken);

      return { accessToken, refreshToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (data, thunkAPI) => {
    const { auth } = thunkAPI.getState();

    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return thunkAPI.rejectWithValue('We dont have a token');
    }

    try {
      setToken(accessToken);
      await axios.put('api/auth/user', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const response = await axios.get('api/auth/current');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
