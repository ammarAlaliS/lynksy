import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveMenuState {
  selectedCategory: string;
}

const initialState: ActiveMenuState = {
  selectedCategory: 'Todo',
};

const activeMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addCategory } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;
