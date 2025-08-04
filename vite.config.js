import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✅ Build optimization
  build: {
    target: "esnext",
    minify: "esbuild", // fast and exact
    cssCodeSplit: true, // CSS split
    sourcemap: false,   // Production  sourcemap 
    chunkSizeWarningLimit: 800, // warning  limit
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"], 
        },
      },
    },
  },

  // ✅ Deep optimize
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },

  server: {
    open: true,
    port: 3000,
  },
});
