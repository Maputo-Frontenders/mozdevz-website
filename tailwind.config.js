/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
        about: "url('/assets/mozdevz-about.jpg')",
        header: "url('/assets/about-cover.jpg')",
        invite: "url('/assets/invite-section.jpg')"
      },
      colors: {
        primary: "hsla(358,75%,50%,1)"
      }
    },
  },
  plugins: [],
}
