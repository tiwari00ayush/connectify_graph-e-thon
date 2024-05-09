/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
        livvic: ["Livvic", "sans-serif"],
      },
    },
    colors: {
      red: "red",
      transparent: "transparent",
      white: "#ffffff",
      black: "black",
      current: "currentColor",
      "purple-light": "#7469B6",
      "secondary-btn": "#2E2A47",
      "primary-btn": "#FDDE55",
      "input-box": "#D9D9D9",
    },
  },
  plugins: [],
};
