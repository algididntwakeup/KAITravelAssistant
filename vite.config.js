// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        // Ini adalah 'content' yang benar
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        // Ini adalah theme kustom kamu (sudah benar)
        theme: {
          extend: {
            fontFamily: {
              poppins: ['"Poppins"', 'sans-serif'],
            },
            colors: {
              'kai-purple-dark': '#3b3a7d',
              'kai-purple-light': '#6b4597',
            },
          },
        },
      },
    }),
  ],
});