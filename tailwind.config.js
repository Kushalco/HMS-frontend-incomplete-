// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '110':'3.5rem',
        '120': '7.0rem', // Adds top-120 equivalent to 30rem
        '150': '7.5rem',
        '128':'12.2rem', // Adds a new top-150 equivalent to 37.5rem
        '129':'16rem'
      },
    },
  },
  plugins: [],
}
