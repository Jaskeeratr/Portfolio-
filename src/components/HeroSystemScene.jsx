import { useEffect, useRef } from "react";

const labels = ["React", "FastAPI", "PostgreSQL", "Airflow", "ML"];

export default function HeroSystemScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !finePointer || window.innerWidth < 900) return undefined;

    const context = canvas.getContext("2d");
    const nodes = labels.map((label, index) => ({
      label,
      angle: (Math.PI * 2 * index) / labels.length,
      radius: 0.26 + index * 0.028,
      speed: 0.00018 + index * 0.00003
    }));
    let width = 0;
    let height = 0;
    let frame = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * 0.48;
      const positions = nodes.map((node) => {
        const angle = node.angle + time * node.speed;
        return {
          ...node,
          x: cx + Math.cos(angle) * width * node.radius,
          y: cy + Math.sin(angle * 1.16) * height * node.radius
        };
      });

      context.globalCompositeOperation = "screen";
      context.lineWidth = 1;
      context.strokeStyle = "rgba(85, 210, 255, 0.22)";
      context.beginPath();
      positions.forEach((node, index) => {
        if (index === 0) context.moveTo(node.x, node.y);
        else context.lineTo(node.x, node.y);
      });
      context.closePath();
      context.stroke();

      positions.forEach((node, index) => {
        const glow = index % 2 ? "rgba(122, 243, 94, 0.35)" : "rgba(85, 210, 255, 0.38)";
        const gradient = context.createRadialGradient(node.x, node.y, 0, node.x, node.y, 48);
        gradient.addColorStop(0, glow);
        gradient.addColorStop(1, "rgba(85, 210, 255, 0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(node.x, node.y, 48, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = index % 2 ? "#7af35e" : "#55d2ff";
        context.beginPath();
        context.arc(node.x, node.y, 4.5, 0, Math.PI * 2);
        context.fill();
      });

      frame = window.requestAnimationFrame(draw);
    }

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="hero-system-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="system-node-legend">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
