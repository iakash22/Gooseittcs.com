/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "dark-blue" : "#0a58ca",
        blue: "#1a73e9",
        "text-black": "#131313",
        "bg-color" : "#F4F4F4"
      }
    },
  },
  plugins: [],
}

