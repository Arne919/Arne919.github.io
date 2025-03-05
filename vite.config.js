import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // 상대 경로 설정 (GitHub Pages에서 올바르게 동작하도록)
  plugins: [react()],
})
