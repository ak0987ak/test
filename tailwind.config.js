/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#ffffff',
        black: '#121723',
        dark: '#1d2430',
        primary: '#4a6cf7',
        yellow: '#fbb040',
        'bg-color-dark': '#171c28',
        'body-color': '#788293',
        'body-color-dark': '#959cb1',
        stroke: '#e3e8ef',
        'stroke-dark': '#353943',
        'gray-dark': '#1e232e',
        'gray-light': '#f0f2f9',
      },
      boxShadow: {
        'sign-up': '0px 5px 10px rgba(4, 10, 34, 0.2)',
        'one': '0px 2px 3px rgba(7, 7, 77, 0.05)',
        'two': '0px 5px 10px rgba(6, 8, 15, 0.1)',
        'three': '0px 5px 15px rgba(6, 8, 15, 0.05)',
        'sticky': 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        'sticky-dark': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)',
        'feature-2': '0px 10px 40px rgba(48, 86, 211, 0.12)',
        'submit': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'submit-dark': '0px 5px 20px rgba(4, 10, 34, 0.1)',
        'btn': '0px 1px 2px rgba(4, 10, 34, 0.15)',
        'btn-hover': '0px 1px 2px rgba(0, 0, 0, 0.15)',
        'btn-light': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        'three': '0px 5px 15px rgba(6, 8, 15, 0.05)',
      },
      aspectRatio: {
        '25/24': '25 / 24',
        '37/22': '37 / 22',
        '77/40': '77 / 40',
        '97/60': '97 / 60',
        '97/44': '97 / 44',
      },
      borderRadius: {
        'xs': '4px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}