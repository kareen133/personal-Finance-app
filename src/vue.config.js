import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/personal-Finance-app/', // ✅ must match your GitHub repo name exactly
})


