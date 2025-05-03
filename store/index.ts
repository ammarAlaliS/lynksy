import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import headerReducer from './slices/headerSlice';
import useAnimatedHeaderReducer from './slices/headerSlice';
import tabIndexReducer from './slices/tabIndexSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    header: headerReducer,
    userAnimatedHeader: useAnimatedHeaderReducer,
    tabIndex: tabIndexReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
