import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black: 'var(--black)',
        white: 'var(--white)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      screens: {
        xs: '500px',
      },
    },
  },
  plugins: [],
} satisfies Config
