/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2E4049",
        "HPrimary-color": "#202a31",
        "secondary-color": "#667085",
      },
      backgroundColor: {
        "primary": "#92CD00",
        "HPrimary": "#87ad24",
        "secondary": "#F9FAFB",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}