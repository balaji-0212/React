/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#101828',
        cloud: '#f8fafc',
        ocean: '#0284c7',
        mint: '#10b981',
        coral: '#f97316',
        violet: '#7c3aed',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(14, 165, 233, 0.18)',
        soft: '0 18px 50px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};
