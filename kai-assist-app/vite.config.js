// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        // 1. TAMBAHKAN BAGIAN 'content' INI. Ini sangat penting!
        // Ini memberitahu Tailwind untuk memindai semua file .jsx di folder src
        // untuk menemukan class seperti 'from-kai-purple-dark'.
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
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
