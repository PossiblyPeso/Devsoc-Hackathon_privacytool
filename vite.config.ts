import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on the current mode
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    // Define process.env variables for client-side access
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    build: {
      outDir: 'dist',
      // Recommended for extension development
      emptyOutDir: true,
    }
  }
})
