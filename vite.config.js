import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/counter': {
        target: 'https://api.counterapi.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/counter/, '/v1'),
      },
    },
  },
})
