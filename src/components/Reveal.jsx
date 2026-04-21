import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.16 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
