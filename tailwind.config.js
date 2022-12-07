/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "marquee-infinite-l": "slidetoleft 15s linear infinite",
        "marquee-infinite-r": "slidetoright 15s linear infinite",
      },
      keyframes: {
        slidetoleft: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(100%, 0)" },
        },
        slidetoright: {
          "0%": { transform: "translate(100%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
  },
  plugins: [],
};
