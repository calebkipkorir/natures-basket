/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Earthy color palette
        'nature': {
          'green': {
            50: '#f0f7f4',
            100: '#dceee3',
            200: '#bddcc9',
            300: '#92c3a7',
            400: '#62a47f',
            500: '#3d8660',
            600: '#2d6b4d',
            700: '#24563f',
            800: '#1f4634',
            900: '#1a3a2c',
          },
          'brown': {
            50: '#faf8f5',
            100: '#f4f0e8',
            200: '#e7ddd0',
            300: '#d4c3ad',
            400: '#bda585',
            500: '#a6896a',
            600: '#8f7356',
            700: '#765d48',
            800: '#614d3d',
            900: '#504134',
          },
          'beige': {
            50: '#fefdfb',
            100: '#faf8f3',
            200: '#f4f0e5',
            300: '#ebe3d1',
            400: '#dfd2b8',
            500: '#d0be9f',
            600: '#b8a384',
            700: '#9a866b',
            800: '#7f6f59',
            900: '#6a5c4b',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

