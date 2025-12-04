import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Make sure this matches your GitHub repo name exactly (case-sensitive)
  base: "/FoodDelivary/"
})
