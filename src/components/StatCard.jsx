import { useEffect, useRef, useState } from "react";

function formatValue(value, decimals) {
  if (decimals > 0) return value.toFixed(decimals);
  return Math.round(value).toString();
}

export default function StatCard({ value, suffix, label, decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(formatValue(0, decimals));

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const duration = 1400;
          const start = performance.now();

          const run = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 4;
            const current = value * eased;
            setDisplay(formatValue(current, decimals));
            if (progress < 1) requestAnimationFrame(run);
          };

          requestAnimationFrame(run);
          observer.disconnect();
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimals]);

  return (
    <article ref={ref} className="stat-card">
      <p className="stat-number">
        {display}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </article>
  );
}
