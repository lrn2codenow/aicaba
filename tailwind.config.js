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
        primary: {
          DEFAULT: '#0062FF', // Deep Electric Blue
        },
        secondary: {
          DEFAULT: '#00C2CB', // Teal/Cyan
        },
        accent: {
          DEFAULT: '#7B61FF', // Violet Purple
        },
        neutral: {
          DEFAULT: '#2D3748', // Dark Slate
        },
        light: {
          DEFAULT: '#F7FAFC', // Soft White
        },
        // Optionally, map Tailwind's 'slate' to your neutral
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
    },
  },
  plugins: [],
}
