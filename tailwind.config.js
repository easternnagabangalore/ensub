/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ensub: {
          red: "#b22020",
          gold: "#dcc392",
          dark: "#111111"
        }
      },
      fontFamily: {
        heading: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}