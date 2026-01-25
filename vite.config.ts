import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: O base deve corresponder ao nome do seu repositório no GitHub
  base: "/my-creative-showcase/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});