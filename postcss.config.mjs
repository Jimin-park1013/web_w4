const config = {
  plugins: ["@tailwindcss/postcss"],
};


export default config;
// nfig.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
  },
}
