module.exports = {
  // darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'laal': "#EF233C",
        'rakhadi': '#8D99AE',
        'kaala': '#282828',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide') ],
}
