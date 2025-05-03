import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderState {
  showHeader: boolean;
}

const initialState: HeaderState = {
  showHeader: true, // estado inicial
};

const useAnimatedHeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setShowHeader: (state, action: PayloadAction<boolean>) => {
      state.showHeader = action.payload;
    },
  },
});

export const { setShowHeader } = useAnimatedHeaderSlice.actions;

export const selectHeader = (state: any) => state.header;

export default useAnimatedHeaderSlice.reducer;
