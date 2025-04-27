import { ThemeColors } from "./ThemeColors";

// Define colors object with specific typing for light and dark modes
export const colors: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    background: "#fff",
    border: 'rgba(128, 128, 128, 0.2)',
    backgroundMenu: '#706D54',
    flastlistColor: '#686D76',
    black:'#010101',
    green: '#333',
    gray: '#777',
    white: '#333'
  },
  dark: {
    background: "#222",
    border: 'rgba(128, 128, 128, 0.1)',
    backgroundMenu: '#030303',
    flastlistColor: '#090909',
    black:'#010101',
    green: '#22c55e',
    gray: '#555',
    white: '#fff'
   
  },
};
