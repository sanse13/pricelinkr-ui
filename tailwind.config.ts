import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
