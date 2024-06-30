/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        email: "url('/email-icon.svg')",
        phone: "url('/phone-icon.svg')",
      },
    },
  },
  plugins: [],
};
