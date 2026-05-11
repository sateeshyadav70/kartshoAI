import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig(() => {
  const plugins = [react()];

  if (process.env.ANALYZE === "true") {
    plugins.push(
      visualizer({
        filename: "dist/stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }

  return {
    plugins,
    build: {
      minify: "esbuild",
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (
                id.includes("react-dom") ||
                id.includes("react-router-dom") ||
                id.includes("/react/")
              ) {
                return "react-vendor";
              }

              if (id.includes("gsap")) {
                return "gsap";
              }

              if (
                id.includes("three") ||
                id.includes("@react-three") ||
                id.includes("@splinetool")
              ) {
                return "three";
              }

              if (id.includes("recharts")) {
                return "charts";
              }

              return "vendor";
            }
          },
        },
      },
    },
  };
})
