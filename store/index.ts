import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import headerReducer from './slices/headerSlice';
import useAnimatedHeaderReducer from './slices/headerSlice';
import tabIndexReducer from './slices/tabIndexSlice';
import activeMenuReducer from './slices/activeMenuSlice';
import productReducer from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    header: headerReducer,
    userAnimatedHeader: useAnimatedHeaderReducer,
    tabIndex: tabIndexReducer,
    activeMenu: activeMenuReducer,
    products: productReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
