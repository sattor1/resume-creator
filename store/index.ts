import { configureStore } from '@reduxjs/toolkit';
import indexSlice from './indexSlice';

export const store = configureStore({
  reducer: {
    index: indexSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
