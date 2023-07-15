import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/main-layout";
import Dashboard from "@/pages/dashboard-page";
import StockDetailsPage from "@/pages/stock-details-page";
import SettingsPage from "@/pages/settings-page";
import PortfolioPage from "@/pages/portfolio-page";
import NewsPage from "@/pages/news-page";

import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/stock/:symbol" element={<StockDetailsPage />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/news" element={<NewsPage />}></Route>
        </Routes>

        <Toaster />
      </MainLayout>
    </BrowserRouter>
  );
}
