/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        "bloody":{
          900:"#880808",
          800:"#AB2328",
          500:"#E10600",
          700:"#BD162C",
          200:"#FF6D6A"
        }
      }
    },
  },
  plugins: [],
}

