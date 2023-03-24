/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        musicplayer_darkness: "#02111B",
        musicplayer_darkness_dark: "#2F4D60",
        musicplayer_light: "#C0E0DE",
        musicplayer_high_light: "#D4FAF0",
        musicplayer_aqua: "#157A6E",
      },
    },
  },
  plugins: [],
};
