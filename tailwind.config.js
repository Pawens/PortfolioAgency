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
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        popupFade: {
          '0%': { opacity: 0, transform: 'translate(-50%, -60%)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        popupFade: 'popupFade 0.3s ease-out',
      },
      fontFamily: {
        satoshi: ['"Satoshi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
