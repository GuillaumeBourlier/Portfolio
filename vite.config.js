import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Ajout important

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
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
    emptyOutDir: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~styles": path.resolve(__dirname, "./src/styles")
    },
  },
});