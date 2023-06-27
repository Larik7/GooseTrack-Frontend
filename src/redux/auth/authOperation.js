// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://goosetrackback.onrender.com/';

// const setToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const claerToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (data, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', data);
//       setToken(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
//   try {
//     const res = await axios.post('/users/login', data);
//     setToken(res.data.token);
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const logOut = createAsyncThunk(
//   'auth/logout',
//   async (data, thunkAPI) => {
//     try {
//       await axios.post('/users/logout', data);
//       claerToken();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const currentPage = createAsyncThunk(
//   'auth/current',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const token = state.auth.token;
//     if (token === null) {
//       return thunkAPI.rejectWithValue('We dont have a token');
//     }

//     try {
//       setToken(token);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
