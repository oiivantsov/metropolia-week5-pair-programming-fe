import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

/*
The purpose of the proxy:

Intercepts frontend requests to /api and forwards them to http://localhost:4000.
When a frontend component sends a request to /api/some-endpoint, Vite's dev server forwards
the request to http://localhost:4000/api/some-endpoint.
*/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});

