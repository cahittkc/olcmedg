/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode : 'class',
    theme: {
      extend: {
        colors: {
          'primary-color': '#3B3B41',
          'primary-light-bg' : '#E4E5E6',
          "menu-color" : '##47474E',
          "secondary-color" : "#3B3B41",
          "content-primary" : "#323236",
          "t-primary-color" : "#a3a3a3",
          "mny-color" : '#e3a08b',
          "self-primary" : "#ffe2d9",
          "self-t" : "#994226"
        },
      },
    },
    plugins: [],
  }