// import { Octokit } from 'octokit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const { TOKEN } = require('../config');

// const octokit = new Octokit({
//   TOKEN,
// });

export const fetchTasks = createAsyncThunk(
  'task/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('api/tasks');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'task/add',
  async (task, { rejectWithValue }) => {
    try {
      console.log(task);
      const response = await axios.post('api/tasks', task);

      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
