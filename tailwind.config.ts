import type { Config } from "tailwindcss";
import {nextui} from '@nextui-org/react'  

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'left-linear' : '#37A3FE',
        'right-linear' : '#2995F3',
        'bgcolor' : '#EAEAEA',
      },
      spacing:{
        '18' : '4.5rem', 
        '100': '50rem'
      }
    },
    darkMode: "class",
    plugins: [nextui()],
  },
  plugins: [],
};
export default config;
