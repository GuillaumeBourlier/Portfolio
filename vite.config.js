import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
