import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "node:url";

//const storybookBuild = process.env.STORYBOOK_BUILD === "true";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "pokeapi-ui",
      // the proper extensions will be added
      fileName: "pokeapi-ui",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react/jsx-runtime": "ReactJsxRuntime",
        },
      },
    },
  },
});
