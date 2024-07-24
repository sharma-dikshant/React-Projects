import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';

// https://vitejnps.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
})
