/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {

      colors: {
        testdark: "#181a1a",
        dark: "#071013",
        gray: "#646E78",
        lightgray: "#E7E7E7",
        light: "#FFFFFF",
        red: "#F50E35",
        green: "#5CF64A",

        "inherit": "inherit",
      },
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },

        '.section': {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '128px',
          padding: '64px 128px',
        },
      
        '.title':  {
          width: '100%',
          fontWeight: '600',
          fontSize: '72px',
        },
      })
    })
  ]
}
