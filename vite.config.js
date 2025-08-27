import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  //base: '/NL-Portfolio/'   
  "deploy:full": "npm run build && npm run deploy"
})