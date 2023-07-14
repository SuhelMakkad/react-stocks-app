import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </React.StrictMode>
);
