module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        workattack: {
          DEFAULT: '#ff811c',
          dark: '#1e252b'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
