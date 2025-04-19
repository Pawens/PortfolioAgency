/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        dropIn: "dropIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
