/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    keyframes: {
        'border-color-change': {
          '0%, 100%': { borderColor: 'rgba(250, 204, 21, 1)' }, // Strong yellow (border-yellow-400)
          '50%': { borderColor: 'rgba(254, 243, 199, 1)' },    // Low yellow (border-yellow-100)
        },
      },
    animation: {
        'border-color-change': 'border-color-change 3s ease-in-out infinite',
      },



    },
  },
  plugins: [],
};
