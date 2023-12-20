import dts from "vite-plugin-dts";
import path from "path";
import { defineConfig } from "vite";

// https://github.com/jasonsturges/vite-typescript-npm-package

export default defineConfig({
  base: "./",
  plugins: [dts({ rollupTypes: true })],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "yourname",
      formats: ["es", "cjs", "umd", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});