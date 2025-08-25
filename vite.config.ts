import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // nếu dùng React

export default defineConfig({
  base: '/happy-birthday-ha/', // Tên repo trên GitHub
  plugins: [react()],
})
