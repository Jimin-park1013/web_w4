const config = {
  plugins: ["@tailwindcss/postcss"],
};

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'


// tailwind.config.js
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
  plugins: [],
}

