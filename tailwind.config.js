/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'saira':["'Saira Condensed', sans-serif"]
      },
      backgroundImage: {
        'homebg': "url('/public/homebg.webp')",
         'workbg':"url('/public/footer-bg.png')",
         'footerbg':"url('/public/footerbg.png')",
         'bgimgall':"url('/public/bg.png')",
         'letstalkbg':"url('/public/letstalk-bg.png')",
      },
      container:{
        center:true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors:{
        yel:"#ffa500",
        btn:"#174153",
        btnhover:"#c57f00",
        footer:"#11526e",
        red:"#d90a2c",
        black:"#111111"
      }
    },
  },
  plugins: [],
}

