import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import headerReducer from './slices/headerSlice';
import useAnimatedHeaderReducer from './slices/headerSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    header: headerReducer,
    userAnimatedHeader: useAnimatedHeaderReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
