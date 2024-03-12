import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
         'xs': '330px',
         '2sm': "786px",
         '2xl': '1440px',
         '3xl': '1600px'
      },
      keyframes: {
       scroll:{
        '0%': {
          transform: 'rotateX(45deg) translateX(0%)',
        },
        '100%': {
          transform: 'rotateX(45deg) translateX(-300%)',
        },
       },
       enlarge: {
        '0%':{
          transform: 'scale(1)'
        },
        '100%': {
          transform: 'scale(1.02)'
        },
       },
      },
      animation: {
       scroll: 'scroll 40s linear infinite',
       enlarge: 'enlarge 2s forwards ease-in'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
