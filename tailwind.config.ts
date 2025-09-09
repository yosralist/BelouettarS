// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',   // violet-600
        secondary: '#06b6d4', // cyan-500
        accent: '#22c55e',    // green-500
        ink: '#0f172a',       // slate-900
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 0)',
        'hero': 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 50%, #22c55e 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        blob: 'blob 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 10px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      container: {
        center: true,
        screens: { lg: '1120px' },
        padding: { DEFAULT: '1rem', lg: '2rem' }
      }
    },
  },
  plugins: [],
}
export default config
