import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import App from "./app/App.tsx";
import ComingSoonGate from "./app/ComingSoonGate.tsx";
import PreviewGate from "./app/PreviewGate.tsx";
import AboutPage from "./app/pages/AboutPage.tsx";
import ExportPage from "./app/pages/ExportPage.tsx";
import HomePage from "./app/pages/HomePage.tsx";
import NotFoundPage from "./app/pages/NotFoundPage.tsx";
import PackagingPage from "./app/pages/PackagingPage.tsx";
import ProductDetailPage from "./app/pages/ProductDetailPage.tsx";
import ProductsPageRoute from "./app/pages/ProductsPageRoute.tsx";
import RfqPage from "./app/pages/RfqPage.tsx";
import SourcingPage from "./app/pages/SourcingPage.tsx";
import "./styles/index.css";

const MAINTENANCE_MODE = (import.meta.env.VITE_MAINTENANCE_MODE ?? "true") === "true";
const PREVIEW_KEY = "previewUnlocked";

function MaintenanceGate() {
  if (!MAINTENANCE_MODE) {
    return <Outlet />;
  }
  const unlocked = localStorage.getItem(PREVIEW_KEY) === "1";
  return unlocked ? <Outlet /> : <Navigate to="/coming-soon" replace />;
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <BrowserRouter>
      <Routes>
      <Route path="/coming-soon" element={<ComingSoonGate />} />
      <Route path="/coming-soon-dark" element={<ComingSoonGate variant="dark" />} />
      <Route path="/preview" element={<PreviewGate />} />
      <Route element={<MaintenanceGate />}>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPageRoute />} />
          <Route path="products/:productId" element={<ProductDetailPage />} />
          <Route path="sourcing" element={<SourcingPage />} />
          <Route path="packaging" element={<PackagingPage />} />
          <Route path="export" element={<ExportPage />} />
          <Route path="rfq" element={<RfqPage />} />
        </Route>
      </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
