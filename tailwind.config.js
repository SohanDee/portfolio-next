/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Times New Roman", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
