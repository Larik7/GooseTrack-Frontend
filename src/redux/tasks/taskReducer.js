import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchTasks, addTask, updateTask, deleteTask } from './taskOperation';

const taskReducer = createSlice({
  name: 'task',
  initialState: {
    activeDate: new Date().toISOString().slice(0, 10),
    tasks: {
      allTasks: [],
      isLoading: false,
      error: null,
    },

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
    setActivedDate(state, { payload }) {
      state.activeDate = payload;
    },
    updateColumns: (state, action) => {
      state.columns = action.payload;
    },
    setData: (state, action) => {
      state.tasks = action.payload.tasks;

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

    [addTask.pending]: state => {
      state.tasks.isLoading = true;
    },

    [addTask.fulfilled]: (state, action) => {
      state.tasks.isLoading = false;
      state.tasks.error = null;

      const task = action.payload;

      const category = task.category;
      const columnKey = Object.keys(state.columns).find(
        key => state.columns[key].name === category
      );
      if (columnKey) {
        state.columns[columnKey].items.push(task);
      }

      state.tasks.allTasks.push(task);
    },

    [addTask.rejected]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = payload;
    },

    [updateTask.pending]: state => {
      state.tasks.isLoading = true;
    },

    [updateTask.fulfilled]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = null;
      const taskIndex = state.tasks.allTasks.findIndex(
        task => task._id === payload._id
      );
      state.tasks[taskIndex] = payload.task;
    },

    [updateTask.rejected]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = payload;
    },

    [deleteTask.pending]: state => {
      state.tasks.isLoading = false;
      state.tasks.error = null;
    },

    [deleteTask.fulfilled]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = null;
      state.tasks.allTasks = state.tasks.allTasks.filter(
        task => task._id !== payload
      );
    },

    [deleteTask.rejected]: (state, { payload }) => {
      state.tasks.isLoading = false;
      state.tasks.error = payload;
    },
  },
});

export const { updateColumns, setData, setActivedDate } = taskReducer.actions;

export default taskReducer.reducer;
