import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  define: {
    "process.env": {
      REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
      REACT_APP_TIMEOUT: process.env.REACT_APP_TIMEOUT,
      REACT_APP_X_API_KEY: process.env.REACT_APP_X_API_KEY,
      TIMEOUT: process.env.TIMEOUT,
      API_KEY: process.env.API_KEY,
      API_URL: process.env.API_URL,
      JAVA_HOME: process.env.JAVA_HOME
    }
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import 'src/styles.scss';` }
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "build"
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3002
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "c8",
      reporter: ["text", "lcov"] // or 'c8'
    },
    setupFiles: ["./src/test/setups.ts"],
    // mockReset: true,
    // clearMocks: true,
    restoreMocks: true
  }
});
