/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pitagon-400": ["pitagon-sans-400"],
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
};
