import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;

function ensureGAScript() {
  if (!GA_MEASUREMENT_ID || document.getElementById("ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

function ensurePlausibleScript() {
  if (!PLAUSIBLE_DOMAIN || document.getElementById("plausible-script")) return;
  const script = document.createElement("script");
  script.id = "plausible-script";
  script.defer = true;
  script.dataset.domain = PLAUSIBLE_DOMAIN;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

export default function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    ensureGAScript();
    ensurePlausibleScript();
  }, []);

  useEffect(() => {
    const pagePath = `${pathname}${search}`;

    if (typeof window.gtag === "function" && GA_MEASUREMENT_ID) {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_title: document.title
      });
    }

    if (typeof window.plausible === "function" && PLAUSIBLE_DOMAIN) {
      window.plausible("pageview", { u: window.location.href });
    }
  }, [pathname, search]);

  return null;
}
