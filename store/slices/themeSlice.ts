// themeSlice.ts

import { colors } from "@/types/Colors";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Define the initial state with a boolean value for darkMode
const initialState = {
  darkMode: true,
};

// Create the theme slice with type-safe reducers
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

// Export actions
export const { toggleDarkMode } = themeSlice.actions;

// Type-safe selector to access darkMode from state
export const selectDarkMode = (state: { theme: { darkMode: boolean } }) => state.theme.darkMode;

// Type-safe selector to get the current theme based on darkMode
export const selectTheme = (state: { theme: { darkMode: boolean } }) =>
  state.theme.darkMode ? colors.dark : colors.light;

// Export the theme reducer
export default themeSlice.reducer;
