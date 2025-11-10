import typography from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'

module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: '1025px',
      sm: '640px',
      xlg: {
        max: '1024px',
      },
      xsm: {
        max: '639px',
      },
      tablet: {
        min: '640px',
        max: '1024px',
      },
    },
    extend: {
      fontFamily: {
        clashDisplay: ['var(--font-clash-display)', 'sans-serif'],
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.heading-1': {
          '@apply font-clashDisplay text-[2rem] leading-[1.2] tracking-[-0.02em] sm:text-[3.75rem]':
            {},
        },
        '.heading-2': {
          '@apply font-clashDisplay text-[1.875rem] leading-[1.25] tracking-[-0.01em] sm:text-[3rem]':
            {},
        },
        '.heading-3': {
          '@apply font-clashDisplay text-[1.5rem] leading-[1.3] tracking-[0em] sm:text-[2.25rem]':
            {},
        },
        '.heading-4': {
          '@apply font-clashDisplay text-[1.25rem] leading-[1.35] tracking-[0.01em] sm:text-[1.875rem]':
            {},
        },
        '.heading-5': {
          '@apply font-clashDisplay text-[1.125rem] leading-[1.4] tracking-[0.015em] sm:text-[1.5rem]':
            {},
        },
        '.heading-6': {
          '@apply font-clashDisplay text-[1rem] leading-[1.45] tracking-[0.02em] sm:text-[1.25rem]':
            {},
        },
        '.p-12': {
          '@apply text-[0.75rem] leading-[1.35] tracking-[-0.01em]': {},
        },
        '.p-14': {
          '@apply text-[0.875rem] leading-[1.4] tracking-[-0.005em]': {},
        },
        '.p-16': {
          '@apply text-[1rem] leading-[1.5] tracking-[0em]': {},
        },
        '.p-18': {
          '@apply text-[1.125rem] leading-[1.6] tracking-[0.005em]': {},
        },
        '.p-20': {
          '@apply text-[1.25rem] leading-[1.65] tracking-[0.01em]': {},
        },
        '.p-24': {
          '@apply text-[1.5rem] leading-[1.7] tracking-[0.015em]': {},
        },
      })
    }),
    animate,
    typography,
  ],
}
