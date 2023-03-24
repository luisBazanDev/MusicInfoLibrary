/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        musicplayer_darkness: "#2E2F34",
        musicplayer_darkness_light: "#424348",
        musicplayer_darkness_dark: "#69686D",
        musicplayer_light: "#B5C7CB",
        musicplayer_high_light: "#DADFE2",
        musicplayer_aqua: "#6C7A83",
      },
    },
  },
  plugins: [],
};
