module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {"Poppins" : ["Poppins", "sans-serif"]},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}