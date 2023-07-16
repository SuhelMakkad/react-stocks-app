import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const getPath = (route: string) => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/layouts": getPath("./src/layouts"),
      "@/pages": getPath("./src/pages"),
      "@/components": getPath("./src/common/components"),
      "@/hooks": getPath("./src/common/hooks"),
      "@/styles": getPath("./src/common/styles"),
      "@/utils": getPath("./src/common/utils"),
      "@/images": getPath("./src/assets/images"),
      "@/store": getPath("./src/store"),
      "@/assets": getPath("./src/assets"),
      "@/": getPath("./src"),
      "@": getPath("./src"),
    },
  },

  plugins: [react()],
});
