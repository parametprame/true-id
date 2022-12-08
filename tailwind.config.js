/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f9d3d2",
          200: "#f3a6a4",
          300: "#ee7a77",
          400: "#e84d49",
          500: "#e2211c",
          600: "#b51a16",
          700: "#881411",
          800: "#5a0d0b",
          900: "#2d0706",
        },
      },
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
