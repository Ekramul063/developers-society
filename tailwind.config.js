/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes:[
      {
      traditionalFoodieTheme:{
        primary:'#101820FF',
        secondary:'#e39911'
      },
    }]
  },
  plugins: [require("daisyui")],
}
