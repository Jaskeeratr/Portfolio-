import { useEffect } from "react";

const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

function sectionProgress(selector, viewportHeight) {
  const element = document.querySelector(selector);
  if (!element) return 0;

  const rect = element.getBoundingClientRect();
  return clamp01((viewportHeight - rect.top) / (viewportHeight + rect.height));
}

export default function ScrollChoreography() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;

    if (reducedMotion) {
      root.style.setProperty("--scroll-depth", "0");
      root.style.setProperty("--hero-scroll", "0");
      root.style.setProperty("--project-story-scroll", "1");
      root.style.setProperty("--timeline-scroll", "1");
      root.style.setProperty("--contact-scroll", "1");
      return undefined;
    }

    let frame = 0;

    function update() {
      frame = 0;

      const viewportHeight = window.innerHeight || 1;
      const scrollable = document.documentElement.scrollHeight - viewportHeight;
      const depth = scrollable > 0 ? clamp01(window.scrollY / scrollable) : 0;

      root.style.setProperty("--scroll-depth", depth.toFixed(4));
      root.style.setProperty(
        "--hero-scroll",
        sectionProgress(".home-pro-hero", viewportHeight).toFixed(4)
      );
      root.style.setProperty(
        "--project-story-scroll",
        sectionProgress(".home-pro-projects, .projects-story-page", viewportHeight).toFixed(4)
      );
      root.style.setProperty(
        "--timeline-scroll",
        sectionProgress(".experience-page .timeline", viewportHeight).toFixed(4)
      );
      root.style.setProperty(
        "--contact-scroll",
        sectionProgress(".contact-card", viewportHeight).toFixed(4)
      );
    }

    function requestUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return null;
}
