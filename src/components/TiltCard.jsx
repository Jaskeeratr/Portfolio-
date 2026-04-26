export default function TiltCard({
  as: Tag = "article",
  className = "",
  children,
  strength = 8,
  onMouseMove,
  onMouseLeave,
  style = {},
  ...props
}) {
  function onMove(event) {
    onMouseMove?.(event);
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * strength;
    const rotateX = (0.5 - y) * strength;

    element.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
    element.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
    element.style.setProperty("--tilt-glow-x", `${(x * 100).toFixed(1)}%`);
    element.style.setProperty("--tilt-glow-y", `${(y * 100).toFixed(1)}%`);
  }

  function onLeave(event) {
    onMouseLeave?.(event);
    const element = event.currentTarget;
    element.style.setProperty("--tilt-rx", "0deg");
    element.style.setProperty("--tilt-ry", "0deg");
    element.style.setProperty("--tilt-glow-x", "50%");
    element.style.setProperty("--tilt-glow-y", "0%");
  }

  return (
    <Tag
      className={`tilt-surface ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        "--tilt-rx": "0deg",
        "--tilt-ry": "0deg",
        "--tilt-glow-x": "50%",
        "--tilt-glow-y": "0%",
        ...style
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
