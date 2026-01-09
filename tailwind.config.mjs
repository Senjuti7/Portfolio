/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)"], // default text
        Ovo: ["var(--font-ovo)"],     // headings
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      }
    },
  },
};
