import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TabIndexState {
  index: number;
}

const initialState: TabIndexState = {
  index: 0,
};

export const tabIndexSlice = createSlice({
  name: 'tabIndex',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = tabIndexSlice.actions;
export default tabIndexSlice.reducer;
