/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dropIn: "dropIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
