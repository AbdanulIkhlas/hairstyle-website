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
        secondary: "#EDEEEF",
        third: "#FFD748",
        // pale: "#D9D9D9",
      },
      boxShadow: {
        // cardShadow: "0 5px 16px 0 rgba(0, 0, 0, 0.15)",
        buttonShadowActive:
          "0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.25)",
        buttonShadow:
          "0 4px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
