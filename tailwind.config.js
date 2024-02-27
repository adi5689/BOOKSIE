/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-ping": "ping  4s cubic-bezier(0,  0,  0.2,  1) infinite",
      },
      fontFamily: {
        'anta': ['Anta', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
