module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backG: "#1A73E8",
        inputG : "#F3F8FF",
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
