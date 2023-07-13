import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const getPath = (route: string) => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/pages": getPath("./src/pages"),
      "@/components": getPath("./src/common/components"),
      "@/hooks": getPath("./src/common/hooks"),
      "@/styles": getPath("./src/common/styles"),
      "@/utils": getPath("./src/common/utils"),
      "@/store": getPath("./src/common/store"),
      "@/images": getPath("./src/assets/images"),
      "@/assets": getPath("./src/assets"),
      "@/": getPath("./src"),
      "@": getPath("./src"),
    },
  },

  plugins: [react()],
});
