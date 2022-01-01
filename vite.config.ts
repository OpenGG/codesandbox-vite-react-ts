import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: process.cwd() === "/sandbox" && {
    hmr: {
      port: 443
    }
  },
  plugins: [react()]
})
