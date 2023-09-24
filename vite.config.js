import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://over1185.github.io/Rick-and-Morty-for-React/",
  plugins: [react()],
});
