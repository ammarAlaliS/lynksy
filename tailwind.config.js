/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",      
        secondary: "#151312",    
        accent: "#AB8BFF",

        light: {
          background: "#F5F5F5",
          text: "#1A1A1A",
          card: "#FFFFFF",
          border: "#E2E2E2",
        },

        dark: {
          background: "#0B0B0F",
          text: "#E5E5E5",
          card: "#1C1C24",
          border: "#2D2D3A",
        },
      },
    },
  },
  plugins: [],
};
