import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: '/Portfolio/'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/layout/variables" as *;
          @use "src/styles/layout/mixins" as *;
        `,
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        404: path.resolve(__dirname, '404.html')
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~styles": path.resolve(__dirname, "./src/styles")
    },
  },
});