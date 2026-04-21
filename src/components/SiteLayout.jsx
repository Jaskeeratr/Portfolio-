import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";

export default function SiteLayout() {
  const location = useLocation();

  return (
    <>
      <ScrollProgress />
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />
      <Navbar />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
