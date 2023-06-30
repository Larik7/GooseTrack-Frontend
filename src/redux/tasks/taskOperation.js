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
      const response = await axios.get('/tasks');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
