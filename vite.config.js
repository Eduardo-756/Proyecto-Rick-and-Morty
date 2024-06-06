import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Eduardo-756.github.io/Proyecto-Rick-and-Morty/",
  plugins: [react()],
})
