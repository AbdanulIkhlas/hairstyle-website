/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#ABEB68",
        // secondary: "#10b981",
        // pale: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
