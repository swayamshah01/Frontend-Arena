import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          three: ['@react-three/fiber', '@react-three/drei']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: true,
    port: 3000
  },
  preview: {
    port: 3000
  }
})