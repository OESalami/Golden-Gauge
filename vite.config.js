import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Changes output directory from 'dist' to 'build'
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '@': resolve('./src'),
},
},
})
