module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          'taskbar': '#1E2225'
        },

        blue: {
          'mic': '#2D80C1'
        }
      }
    },
  },
  plugins: [],
}