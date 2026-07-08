import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#05060a',
        base2: '#0a0d16',
        accent: '#8fe3b0',
        accent2: '#7dd3fc',
        accent3: '#c4b5fd',
        ink: '#f3f5f8',
        muted: '#9aa4b8',
        panel: 'rgba(255,255,255,0.045)',
        border: 'rgba(255,255,255,0.09)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.55)',
        glow: '0 0 0 1px rgba(143,227,176,0.25), 0 0 40px rgba(143,227,176,0.25)',
        'glow-lg': '0 0 0 1px rgba(143,227,176,0.2), 0 30px 90px rgba(143,227,176,0.16), 0 20px 60px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 15% 15%, rgba(143,227,176,0.16), transparent 32%), radial-gradient(circle at 85% 0%, rgba(125,211,252,0.14), transparent 34%), radial-gradient(circle at 50% 100%, rgba(196,181,253,0.12), transparent 40%), linear-gradient(180deg, #05060a, #05060a)',
        'glass-sheen':
          'linear-gradient(120deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.08) 38%, rgba(255,255,255,0) 55%)',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        'float-slow': 'float 15s ease-in-out infinite',
        'float-slower': 'float 22s ease-in-out infinite reverse',
        blob: 'blob 18s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'spin-slow': 'spin 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-24px,0) scale(1.04)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.12)' },
          '66%': { transform: 'translate(-24px,24px) scale(0.92)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
