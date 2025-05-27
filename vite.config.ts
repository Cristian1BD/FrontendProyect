import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
  },
  // Esto es clave para que React Router funcione en producción
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
