import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import App from "./app/App.tsx";
import ComingSoonGate from "./app/ComingSoonGate.tsx";
import PreviewGate from "./app/PreviewGate.tsx";
import HomePage from "./app/pages/HomePage.tsx";
import ScrollToTop from "./app/ScrollToTop.tsx";
import "./styles/index.css";

const AboutPage = lazy(() => import("./app/pages/AboutPage.tsx"));
const BlogDetailPage = lazy(() => import("./app/pages/BlogDetailPage.tsx"));
const BlogIndexPage = lazy(() => import("./app/pages/BlogIndexPage.tsx"));
const ExportPage = lazy(() => import("./app/pages/ExportPage.tsx"));
const NotFoundPage = lazy(() => import("./app/pages/NotFoundPage.tsx"));
const PackagingPage = lazy(() => import("./app/pages/PackagingPage.tsx"));
const PackagingDetailPage = lazy(() => import("./app/pages/PackagingDetailPage.tsx"));
const ProductDetailPage = lazy(() => import("./app/pages/ProductDetailPage.tsx"));
const ProductsPageRoute = lazy(() => import("./app/pages/ProductsPageRoute.tsx"));
const RfqPage = lazy(() => import("./app/pages/RfqPage.tsx"));
const SourcingPage = lazy(() => import("./app/pages/SourcingPage.tsx"));

const MAINTENANCE_MODE = (import.meta.env.VITE_MAINTENANCE_MODE ?? "true") === "true";
const PREVIEW_KEY = "previewUnlocked";

function MaintenanceGate() {
  if (!MAINTENANCE_MODE) {
    return <Outlet />;
  }
  const unlocked = localStorage.getItem(PREVIEW_KEY) === "1";
  return unlocked ? <Outlet /> : <Navigate to="/coming-soon" replace />;
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});
  });
}

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
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
              <Route path="packaging/catalog/:slug" element={<PackagingDetailPage />} />
              <Route path="export" element={<ExportPage />} />
              <Route path="blog" element={<BlogIndexPage />} />
              <Route path="blog/:slug" element={<BlogDetailPage />} />
              <Route path="rfq" element={<RfqPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  </ThemeProvider>
);
