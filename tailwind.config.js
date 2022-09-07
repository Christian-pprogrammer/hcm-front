module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backG: "#1A73E8",
        inputG : "#F3F8FF",
        linear : "#1A73E821",
        modalG : "#00000033",
        redlinearG : "#D743432133"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
