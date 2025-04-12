import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Inclua os caminhos dos seus arquivos
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'], // Adicione a fonte Lexend
      },
    },
  },
  plugins: [
    scrollbar,
  ],
};

export default config;
