import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  },
  theme: {
    colors: {
      'dark-charcoal': '#312E2C',
      'dark-raspberry': '7A284E',
      'wenge-brown': '#5F564D',
      'eggshell': '#F3E5D7',
      'white-coffee': '#E3DDD7',
      'snow': '#FFF7FB',
      'white': '#FFFFFF'
    },
    fontFamily: {
      outer: ['var(--font-outer), sans-serif'],
      'young-serif': ['var(--young-serif), sans-serif'],
    },
    fontSize: {
      'heading-l': ['40px', { lineHeight: '100px' }],
      'heading-m': ['24px', { lineHeight: '100px' }],
      'heading-s': ['20px', { lineHeight: '100px' }],
      'body-regular': ['16px', { lineHeight: '100px', fontWeight: 400 }],
      'body-bold': ['16px', { lineHeight: '100px', fontWeight: 600 }],
    }
  },
  plugins: [nextui()],
};
export default config;
