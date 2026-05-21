import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AnalyticsTracker from "./components/AnalyticsTracker";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";

const ContactPage = lazy(() => import("./pages/ContactPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <Suspense fallback={<div className="route-loading" aria-label="Loading page" />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
