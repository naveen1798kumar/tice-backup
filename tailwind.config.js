
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind scans all your JSX/TSX files
  ],
  theme: {
    extend: {
      fontSize: {
        'base': '18px', // Set root font size to 18px
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],  
};
