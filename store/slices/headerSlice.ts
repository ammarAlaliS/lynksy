// store/slices/headerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  showHeader: boolean;
  textTitle: string;
  showNotificationTitle: boolean;
}

const initialState: HeaderState = {
  showHeader: true,
  textTitle: '',
  showNotificationTitle: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setShowHeader: (state, action: PayloadAction<boolean>) => {
      state.showHeader = action.payload;
    },
    setTextTitle: (state, action: PayloadAction<string>) => {
      state.textTitle = action.payload;
    },
    setShowNotificationTitle: (state, action: PayloadAction<boolean>) => {
      state.showNotificationTitle = action.payload;
    },
  },
});

export const { setShowHeader, setTextTitle, setShowNotificationTitle } = headerSlice.actions;

export const selectHeader = (state: any) => state.header;

export default headerSlice.reducer;
