import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const nodes = [
  { label: "APIs", position: [-2.4, 0.85, 0.15], color: "#55d2ff" },
  { label: "ML", position: [1.9, 1.2, -0.15], color: "#7af35e" },
  { label: "Data", position: [-1.45, -1.05, 0.25], color: "#ffd166" },
  { label: "UX", position: [2.35, -0.8, 0.1], color: "#ff9f5a" },
  { label: "Cloud", position: [0.15, 1.85, -0.35], color: "#b794ff" }
];

function useReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function EllipseLine({ radius = 1.4, color = "#55d2ff", speed = 0.18, rotation = [0, 0, 0] }) {
  const ref = useRef(null);
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.46, 0, Math.PI * 2);
    const points = curve.getPoints(120).map((point) => new THREE.Vector3(point.x, point.y, 0));
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <line ref={ref} geometry={geometry} rotation={rotation}>
      <lineBasicMaterial color={color} transparent opacity={0.34} />
    </line>
  );
}

function StarField() {
  const geometry = useMemo(() => {
    const positions = new Float32Array(360 * 3);
    for (let index = 0; index < 360; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 12;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[index * 3 + 2] = -Math.random() * 8;
    }
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return buffer;
  }, []);

  return (
    <points geometry={geometry}>
      <pointsMaterial size={0.018} color="#dff7ff" transparent opacity={0.42} />
    </points>
  );
}

function Connection({ to, color }) {
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(...to)]),
    [to]
  );

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.18} />
    </line>
  );
}

function SystemScene() {
  const group = useRef(null);
  const reduced = useReducedMotion();

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.18, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.12, 0.04);
    group.current.position.y = Math.sin(clock.elapsedTime * 0.55) * 0.04;
    group.current.rotation.z += delta * 0.018;
  });

  return (
    <group ref={group}>
      <StarField />
      <EllipseLine radius={1.25} color="#55d2ff" rotation={[0.85, 0.25, 0.15]} />
      <EllipseLine radius={1.82} color="#7af35e" speed={-0.12} rotation={[1.15, -0.28, 0.4]} />
      <EllipseLine radius={2.34} color="#ffd166" speed={0.08} rotation={[1.28, 0.06, -0.45]} />

      <mesh>
        <icosahedronGeometry args={[0.74, 2]} />
        <meshStandardMaterial color="#10233a" emissive="#1ec8a5" emissiveIntensity={0.28} roughness={0.34} metalness={0.42} />
      </mesh>

      {nodes.map((node) => (
        <group key={node.label} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.085, 18, 18]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.85} />
          </mesh>
          <mesh position={[0, -0.16, 0]}>
            <boxGeometry args={[0.32, 0.02, 0.02]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.45} />
          </mesh>
        </group>
      ))}

      {nodes.map((node) => (
        <Connection key={`${node.label}-line`} to={node.position} color={node.color} />
      ))}
    </group>
  );
}

export default function CinematicHeroScene() {
  return (
    <div className="cinematic-hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.45]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#55d2ff" />
        <pointLight position={[-4, -2, 3]} intensity={0.75} color="#7af35e" />
        <Suspense fallback={null}>
          <SystemScene />
        </Suspense>
      </Canvas>
      <div className="cinematic-hero-fallback">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
