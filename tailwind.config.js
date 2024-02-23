/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange' : "hsl(26, 100%, 55%)",
        'porange': 'hsl(25, 100%, 94%)',
        'dblue' :'hsl(220, 13%, 13%)',
        'dgblue': 'hsl(219, 9%, 45%)',
        'gblue':'hsl(220, 14%, 75%)',
        'lgblue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'black' : 'hsl(0, 0%, 0%)'
      },
      fontWeight: {
        'regular': '400',
        'bold': '700',
      },
      fontFamily:{
        'kumbh': ['Your Font', 'monospace']
      }
    },
  },
  plugins: [],
}

