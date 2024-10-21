import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
