import { Outlet, useLocation } from "react-router-dom";
import AmbientBackdrop from "./AmbientBackdrop";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollChoreography from "./ScrollChoreography";
import ScrollProgress from "./ScrollProgress";

export default function SiteLayout() {
  const location = useLocation();

  return (
    <>
      <AmbientBackdrop />
      <CustomCursor />
      <ScrollProgress />
      <ScrollChoreography />
      <div key={`route-wipe-${location.pathname}`} className="route-wipe" aria-hidden="true" />
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />
      <Navbar />
      <main key={`page-${location.pathname}`} className="page-transition page-transition-cinematic">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
