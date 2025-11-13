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
        mono: ['var(--font-fira-mono)', 'monospace'],
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
        '.display-xl': {
          '@apply text-[6.5rem] leading-[7rem] tracking-[-0.3125rem] sm:text-[13rem] sm:leading-[13.75rem]':
            {},
        },
        '.display-lg': {
          '@apply text-[3.75rem] leading-[4.25rem] tracking-[-0.25rem] sm:text-[6.75rem] sm:leading-[7.5rem]':
            {},
        },

        '.heading-xl': {
          '@apply text-[2.25rem] leading-[2.75rem] tracking-[-0.125rem] sm:text-[4rem] sm:leading-[4.5rem]':
            {},
        },
        '.heading-lg': {
          '@apply text-[1.75rem] leading-[2.25rem] tracking-[-0.0625rem] sm:text-[3rem] sm:leading-[3.5rem]':
            {},
        },
        '.heading-md': {
          '@apply text-[1.5rem] leading-[1.875rem] tracking-[0rem] sm:text-[2rem] sm:leading-[2.5rem]':
            {},
        },
        '.heading-sm': {
          '@apply text-[1.25rem] leading-[1.5rem] tracking-[0rem] sm:text-[1.5rem] sm:leading-[1.75rem]':
            {},
        },

        '.body-lg': {
          '@apply text-[1.125rem] leading-[1.5rem] tracking-[0rem] sm:leading-[1.75rem]': {},
        },
        '.body': {
          '@apply text-[1rem] leading-[1.375rem] tracking-[0rem] sm:leading-[1.625rem]': {},
        },
        '.body-sm': {
          '@apply text-[0.875rem] leading-[1.125rem] tracking-[0.0375rem] sm:leading-[1.375rem]':
            {},
        },

        '.caption': {
          '@apply text-[0.75rem] leading-[1rem] tracking-[0.0375rem] sm:leading-[1.125rem]': {},
        },
      })
    }),
    animate,
    typography,
  ],
}
