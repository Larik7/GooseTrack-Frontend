import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchTasks } from './taskOperation';

const taskReducer = createSlice({
  name: 'task',
  initialState: {
    tasks: {
      allTasks: [],
      isLoading: false,
      error: null,
    },
    userRepo: [],
    columns: {
      [nanoid()]: {
        name: 'to-do',
        items: [],
      },
      [nanoid()]: {
        name: 'in-progress',
        items: [],
      },
      [nanoid()]: {
        name: 'done',
        items: [],
      },
    },
  },
  reducers: {
    updateColumns: (state, action) => {
      state.columns = action.payload;
    },
    setData: (state, action) => {
      state.tasks = action.payload.tasks;
      state.userRepo = action.payload.userRepo;
      state.columns = action.payload.columns;
    },
  },
  extraReducers: {
    // Fecth tasks
    [fetchTasks.pending]: state => {
      state.tasks.isLoading = true;
      state.columns = {
        [nanoid()]: {
          name: 'to-do',
          items: [],
        },
        [nanoid()]: {
          name: 'in-progress',
          items: [],
        },
        [nanoid()]: {
          name: 'done',
          items: [],
        },
      };
    },
    [fetchTasks.fulfilled]: (state, { payload }) => {
      Object.keys(state.columns).forEach(key => {
        state.columns[key].items = [];
      });

      // Розподіляємо завдання за категоріями у відповідні колонки
      payload.forEach(task => {
        const category = task.category;
        const columnKey = Object.keys(state.columns).find(
          key => state.columns[key].name === category
        );
        if (columnKey) {
          state.columns[columnKey].items.push(task);
        }
      });
      state.tasks.allTasks = payload;
      state.tasks.isLoading = false;
    },
    [fetchTasks.rejected]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = payload;
    },
  },
});

export const { updateColumns, setData } = taskReducer.actions;

export default taskReducer.reducer;
