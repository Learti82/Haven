/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        haven: {
          // Warm white background
          bg: '#FAFAF8',
          // Terracotta accent
          terracotta: '#C4603A',
          terracottaDark: '#A64E2D',
          terracottaLight: '#E08763',
          // Dark charcoal text
          charcoal: '#1C1C1C',
          // Warm neutrals
          beige: '#F0E9E0',
          sand: '#E8DCCB',
          taupe: '#9C8E7E',
          cream: '#FBF6EF',
          dark: '#241F1C',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 10px 30px -10px rgba(120, 70, 40, 0.18)',
        'warm-lg': '0 24px 50px -12px rgba(120, 70, 40, 0.28)',
        'warm-sm': '0 4px 14px -6px rgba(120, 70, 40, 0.15)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #F4E3D3 0%, #E8C3A6 38%, #D08C63 72%, #C4603A 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
