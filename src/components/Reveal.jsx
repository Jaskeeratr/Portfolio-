import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

// `eager` renders content visible immediately (for above-the-fold sections), so the first
// screen never waits on an animation frame.
export default function Reveal({ className = "", children, delay = 0, style = {}, eager = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.16 });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${className}`.trim()}
      initial={reducedMotion || eager ? false : { opacity: 0, y: 22, filter: "blur(6px)" }}
      animate={
        reducedMotion || eager || inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 22, filter: "blur(6px)" }
      }
      transition={{ duration: 0.62, ease: [0.2, 0.8, 0.2, 1], delay: delay / 1000 }}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
    >
      {children}
    </motion.div>
  );
}
