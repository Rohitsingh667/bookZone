import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    entry: 'src/main.jsx',
    outDir: 'build',
  },
  server: {
    fs: {
      allow: ['..', 'node_modules/slick-carousel/slick/fonts'], // Add directories here
    },
  },
})
