import { ThemeColors } from "./ThemeColors";

// Define colors object with specific typing for light and dark modes
export const colors: { light: ThemeColors; dark: ThemeColors } = {
  light: {
    background: "#fff",
    background_back: '#E3E3E3',
    border: 'rgba(128, 128, 128, 0.2)',
    backgroundMenu: '#706D54',
    flastlistColor: '#686D76',
    black:'#010101',
    green: '#333',
    gray: '#777',
    white: '#333',
    inactiveIconColor:'#888',

    // Icons 
    text_icon_is_active: '#fff',
    text_icon_is_not_active: '#fff',

    // Title background
    backgroundSection: '#fff',
    text_general_title: '#111'

  },
  dark: {
    background: "#111",
    background_back: '#111',
    border: 'rgba(128, 128, 128, 0.1)',
    backgroundMenu: '#030303',
    flastlistColor: '#090909',
    black:'#010101',
    green: '#22c55e',
    gray: '#555',
    white: '#fff',
    inactiveIconColor:'#666',

     // Icons 
    text_icon_is_active: '#222',
    text_icon_is_not_active: '#fff',

    // Title background
    backgroundSection: '#444',
    text_general_title: '#fff'
   
  },
};
