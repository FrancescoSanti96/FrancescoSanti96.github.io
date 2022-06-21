module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        xxs: 12,
        xs: 14,
        s: 16,
        m: 18,
        l: 20,
        xl: 22,
        xxl:30
      },
      colors:{
        primaryBg: '#200f57',
        primary: '#ffffff',
        secondaryBg: '#2c186e', 
        secondary: '#000000',
        thirdBg: '#c96e4b',
        thirdBgHover: '#f25f0a',
        error: '#f8a9ad',
        send: '#1e6e33',
        sendHover: '#59f766'
      },
    },
  },
  plugins: [],
}
