/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#108aee',
        secondary: '#18c3d9',
        background: '#010425',
        backgroundDark: '#000531',
        color: '#fbfbfb',
      },
    },
  },
  plugins: [],
};
