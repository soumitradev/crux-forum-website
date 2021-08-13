module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      transparent: 'var(--color-transparent)',

      gray: {
        50: 'var(--color-gray-50)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
        accent: 'var(--color-gray-accent)',
        disabled: 'var(--color-gray-disabled)',
      },
      cyan: 'var(--color-cyan)',
      green: 'var(--color-green)',
      red: 'var(--color-red)',
      purple: 'var(--color-purple)',
      blue: 'var(--color-blue)',
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },
    fontSize: {
      tiny: '0.625rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
