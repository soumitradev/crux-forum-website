const plugin = require('tailwindcss/plugin');

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
  plugins: [
    plugin(function({addUtilities}) {
      const scrollBarUtils = {
        '.scrollhost-container': {
          position: 'relative',
          height: '100%'
        },
        '.scrollhost': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar': {
          width: '10px',
          height: '100%',
          position: 'absolute',
          right: '-6px',
          top: '0',
          bottom: '0',
          'background-color': 'rgba(0, 0, 0, 0)',
          'border-radius': '7px',
          transition: 'opacity 0.1s'
        },
        '.scroll-thumb': {
          opacity: '1',
          width: '3px',
          height: '20px',
          position: 'absolute',
          top: '0',
          'border-radius': '2px',
          'background-color': 'var(--color-cyan)'
        }
      };

      addUtilities(scrollBarUtils);
    })
  ],
};
