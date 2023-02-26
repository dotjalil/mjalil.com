const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      videotype: ["Videotype"],
      roboto: ["Roboto"],
    },
    colors: {
      black: "#0F0F0F",
      white: "#ffffff",
      white94: "#949494",
      whitec9: "#C9C9C9",
      white8f: "#8F8F8F",
      whiteaf: "#AFAFAF",
      whitebc: "#BCBCBC",
      whited4: "#D4D4D4",
    },
    extend: {
      fontFamily: {
        videotype: ["var(--font-videotype)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
