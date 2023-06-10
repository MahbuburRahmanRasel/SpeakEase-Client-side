/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      "theme-1": "#159895",
      "theme-light": "#57C5B6",
      "theme-dark": "#1A5F7A",
      "theme-2": "#002B5B",
      "theme-3": {
        100: "#d0eaea",
        200: "#a1d6d5",
        300: "#73c1bf",
        400: "#44adaa",
        500: "#159895",
        600: "#117a77",
        700: "#0d5b59",
        800: "#083d3c",
        900: "#041e1e",
      },

      "theme-4": {
        100: "#ddf3f0",
        200: "#bce8e2",
        300: "#9adcd3",
        400: "#79d1c5",
        500: "#57c5b6",
        600: "#469e92",
        700: "#34766d",
        800: "#234f49",
        900: "#112724",
      },

      "theme-5": {
        100: "#d1dfe4",
        200: "#a3bfca",
        300: "#769faf",
        400: "#487f95",
        500: "#1a5f7a",
        600: "#154c62",
        700: "#103949",
        800: "#0a2631",
        900: "#051318",
      },

      "theme-6": {
        100: "#ccd5de",
        200: "#99aabd",
        300: "#66809d",
        400: "#33557c",
        500: "#002b5b",
        600: "#002249",
        700: "#001a37",
        800: "#001124",
        900: "#000912",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  

};
