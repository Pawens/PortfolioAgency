/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        popupFade: {
          "0%": { opacity: 0, transform: "translate(-50%, -60%)" },
          "100%": { opacity: 1, transform: "translate(-50%, -50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        popupFade: "popupFade 0.3s ease-out",
      },
      fontFamily: {
        satoshi: ['"Satoshi"', "sans-serif"],
      },
    },
  },
  safelist: [
    "col-start-1",
    "col-start-2",
    "row-start-1",
    "row-start-2",
    "row-start-3",
    "row-start-4",
    "row-start-5",
    "row-start-6",
    "row-start-7",
    "row-start-8",
    "row-start-9",
    "row-start-10",
  ],
  plugins: [],
};
