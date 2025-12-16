/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: {
          DEFAULT: '#0062FF', // Deep Electric Blue
        },
        secondary: {
          DEFAULT: '#00C2CB', // Teal/Cyan
        },
        accent: {
          light: '#4A5568', // lighter gray
          DEFAULT: '#23272F', // dark neutral
          dark: '#000000', // black
        },
        neutral: {
          DEFAULT: '#2D3748', // Dark Slate
        },
        light: {
          DEFAULT: '#F7FAFC', // Soft White
        },
        slate: {
          900: '#2D3748',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': '0% 50%' },
          '50%': { 'background-size': '200% 200%', 'background-position': '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        fadeIn: 'fadeIn 0.2s ease forwards',
      },
    },
  },
  plugins: [],
}
