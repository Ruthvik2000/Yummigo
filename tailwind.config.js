/** @type {import('tailwindcss').Config} */
module.exports= {
  content: [
    "./food_app/**/*.{html,js,jsx}",
  ],
  // ✅ ./food_app/**/*.{js,jsx} tells Tailwind to scan all .js/.jsx files inside food_app folder (including components).
  theme: {
    extend: {},
  },
  plugins: [],
};
