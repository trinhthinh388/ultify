/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        default: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 16px rgb(0 0 0/8%),0 1px 2px rgb(0 0 0/4%),0 0 0 1px rgb(0 0 0/3%)',
        cardDark: '0 0 0 1px rgba(82,82,82,.6)',
        cardHover: '0 8px 16px rgb(251 154 0/58%),0 1px 2px rgb(251 154 0/14%),0 0 0 1px rgb(251 154 0/13%)',
        cardHoverDark: '0 0 0 1px rgba(251,154,0,.6)'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
