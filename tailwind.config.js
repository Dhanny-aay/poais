/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Cabin: ["Cabin", "sans-serif"],
        Roboto_Black: ["Roboto_Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
