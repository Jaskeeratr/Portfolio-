import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "data-heavy full-stack products",
  "production data pipelines",
  "backend APIs and automation",
  "ML prediction systems"
];

export default function KineticRoleText() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="kinetic-role" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.strong
          key={roles[index]}
          initial={reducedMotion ? false : { y: "110%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={reducedMotion ? undefined : { y: "-110%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.48, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {roles[index]}
        </motion.strong>
      </AnimatePresence>
    </span>
  );
}
