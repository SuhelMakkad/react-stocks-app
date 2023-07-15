import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/main-layout";
import Dashboard from "@/pages/dashboard-page";
import StockDetailsPage from "@/pages/stock-details-page";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/stock/:stockId" element={<StockDetailsPage />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
