import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Opens browser automatically
    host: true  // Allows network access
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // Enables @ imports
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000
  }
})
