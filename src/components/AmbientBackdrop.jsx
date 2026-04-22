export default function AmbientBackdrop() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow glow-a" />
      <div className="ambient-glow glow-b" />
      <div className="ambient-glow glow-c" />
      <div className="ambient-scanlines" />
      <div className="ambient-orbit">
        <span />
        <span />
      </div>
    </div>
  );
}
