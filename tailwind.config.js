/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pathfinding/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2F3E46',
        'ashGray': '#CAD2C5',
        'darkSeaGreen': '#84A98C',
        'orangeRed': '#F26419',
        'unitedNationsBlue': '#6290C8',
        'ming': '#28666E',
        'navajoWhite': '#FEDC97',
        'outerSpaceCrayola': '#2C3639',
        'darkSlateGray': '#3F4E4F',
        'graniteGray': '#696464',
      },

    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
}

