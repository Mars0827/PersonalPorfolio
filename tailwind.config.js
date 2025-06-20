/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      greenz: 'var(--color-greenz)',
      yellowz: 'var(--color-yellowz)',
      orangez: 'var(--color-orangez)',
      redz: 'var(--color-redz)',
      darkpurple: 'var(--color-darkpurple)',
      lightpurple: 'var(--color-lightpurple)',
      cyanz: 'var(--color-cyanz)',
      bluez: 'var(--color-bluez)',
      grayz: 'var(--color-grayz)',
      offwhite: 'var(--color-offwhite)',
      blackz: 'var(--color-blackz)',
    },
    keyframes: {
      gentleBounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-5%)' }, 
      },
    },
    animation: {
      gentleBounce: 'gentleBounce 2s ease-in-out infinite',
    },
  },
};
export const plugins = [];
