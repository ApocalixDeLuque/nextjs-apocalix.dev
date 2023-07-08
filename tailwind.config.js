/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {

      colors: {
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
  plugins: [],
}
