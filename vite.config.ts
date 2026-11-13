import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'react-build',
    rollupOptions: { input: 'dev.html' },
  },
})
