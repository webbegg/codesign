/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#5E5E5E",
        black: "#1E1E1E",
      },
      fontFamily: {
        title: ["Tanker"],
        body: ["Erode"],
      },
    },
  },
  plugins: [],
};
