import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';

import { reviewsReducer } from './reviews/reviewSlice';

import taskReducer from './tasks/taskReducer';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistConfigTask = {
  key: 'task',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),

    reviews: reviewsReducer,

    task: persistReducer(persistConfigTask, taskReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
