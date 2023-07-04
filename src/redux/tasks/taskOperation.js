// import { Octokit } from 'octokit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setToken = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const fetchTasks = createAsyncThunk(
  'task/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken);
      const response = await axios.get('api/tasks');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/add',
  async (task, { rejectWithValue, getState }) => {
    console.log(task);
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      setToken(accessToken); // Розкоментуйте цей рядок
      const response = await axios.post('api/tasks', task);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'task/update',
  async ({ id, task }, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      const response = await axios.patch(`api/tasks/${id}`, task);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'task/delete',
  async (taskId, { rejectWithValue, getState }) => {
    console.log(taskId);
    const { auth } = getState();
    const accessToken = auth.accessToken;
    if (accessToken === null) {
      return rejectWithValue('We dont have a token');
    }
    try {
      const response = await axios.delete(`api/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
