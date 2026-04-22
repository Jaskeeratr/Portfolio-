import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const coreRef = useRef(null);
  const haloRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: -120, y: -120 });
  const haloPosRef = useRef({ x: -120, y: -120 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      setEnabled(false);
      return undefined;
    }

    setEnabled(true);
    return undefined;
  }, []);

  useEffect(() => {
    if (!enabled || !coreRef.current || !haloRef.current) return undefined;

    document.body.classList.add("custom-pointer-enabled");

    const root = document.documentElement;
    const core = coreRef.current;
    const halo = haloRef.current;

    function renderHalo() {
      haloPosRef.current.x += (targetRef.current.x - haloPosRef.current.x) * 0.18;
      haloPosRef.current.y += (targetRef.current.y - haloPosRef.current.y) * 0.18;
      halo.style.transform = `translate3d(${haloPosRef.current.x}px, ${haloPosRef.current.y}px, 0)`;
      rafRef.current = window.requestAnimationFrame(renderHalo);
    }

    function onMove(event) {
      const x = event.clientX;
      const y = event.clientY;

      targetRef.current = { x, y };
      core.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      core.style.opacity = "1";
      halo.style.opacity = "1";

      const px = ((x / window.innerWidth) - 0.5) * 2;
      const py = ((y / window.innerHeight) - 0.5) * 2;
      root.style.setProperty("--parallax-x", px.toFixed(4));
      root.style.setProperty("--parallax-y", py.toFixed(4));
    }

    function onDown() {
      core.classList.add("pressed");
      halo.classList.add("pressed");
    }

    function onUp() {
      core.classList.remove("pressed");
      halo.classList.remove("pressed");
    }

    function onLeave() {
      core.style.opacity = "0";
      halo.style.opacity = "0";
      root.style.setProperty("--parallax-x", "0");
      root.style.setProperty("--parallax-y", "0");
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });

    rafRef.current = window.requestAnimationFrame(renderHalo);

    return () => {
      document.body.classList.remove("custom-pointer-enabled");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);
      window.cancelAnimationFrame(rafRef.current);
      root.style.setProperty("--parallax-x", "0");
      root.style.setProperty("--parallax-y", "0");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={haloRef} className="pointer-halo" aria-hidden="true" />
      <div ref={coreRef} className="pointer-core" aria-hidden="true" />
    </>
  );
}
