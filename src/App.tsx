import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/main-layout";
import Dashboard from "@/pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
