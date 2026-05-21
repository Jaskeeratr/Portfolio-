import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const worldThemes = {
  gapcheck: { primary: "#1ec8a5", secondary: "#55d2ff", shape: "resume" },
  "premier-league-predictor": { primary: "#6fb3ff", secondary: "#7af35e", shape: "scoreboard" },
  "alberta-energy-data-pipeline": { primary: "#ff9f5a", secondary: "#ffd166", shape: "pipeline" },
  "macro-finder": { primary: "#82d67f", secondary: "#ffd166", shape: "nutrition" }
};

function EllipseLine({ radius = 1.2, color = "#55d2ff", rotation = [0, 0, 0], speed = 0.16 }) {
  const ref = useRef(null);
  const geometry = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius * 0.46, 0, Math.PI * 2);
    return new THREE.BufferGeometry().setFromPoints(curve.getPoints(90).map((point) => new THREE.Vector3(point.x, point.y, 0)));
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

function Panel({ position, color, scale = [0.72, 0.42, 0.035] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial color="#10233a" emissive={color} emissiveIntensity={0.24} roughness={0.36} metalness={0.25} />
    </mesh>
  );
}

function Connection({ points, color }) {
  const geometry = useMemo(
    () => new THREE.BufferGeometry().setFromPoints(points.map((point) => new THREE.Vector3(...point))),
    [points]
  );

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.74} />
    </line>
  );
}

function ProjectWorld({ project }) {
  const theme = worldThemes[project.slug] ?? { primary: "#55d2ff", secondary: "#7af35e", shape: "system" };
  const root = useRef(null);

  useFrame(({ pointer, clock }) => {
    if (!root.current) return;
    root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, pointer.x * 0.16, 0.05);
    root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, -pointer.y * 0.08, 0.05);
    root.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.035;
  });

  return (
    <group ref={root}>
      <EllipseLine radius={1.3} color={theme.primary} rotation={[1.08, 0.18, 0]} />
      <EllipseLine radius={1.54} color={theme.secondary} rotation={[1.28, -0.2, 0.72]} speed={-0.11} />
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />
        <meshStandardMaterial color={theme.primary} emissive={theme.primary} emissiveIntensity={0.65} roughness={0.24} metalness={0.3} />
      </mesh>

      {theme.shape === "pipeline" ? (
        <>
          <Panel position={[-1.1, 0.08, 0]} color={theme.primary} scale={[0.36, 0.36, 0.7]} />
          <Panel position={[1.1, -0.02, 0]} color={theme.secondary} scale={[0.36, 0.36, 0.7]} />
          <Connection color={theme.primary} points={[[-0.88, 0.08, 0], [-0.25, 0.28, 0.1], [0.42, -0.12, 0.05], [0.88, -0.02, 0]]} />
        </>
      ) : (
        <>
          <Panel position={[-0.92, 0.45, 0.08]} color={theme.primary} />
          <Panel position={[0.94, 0.28, -0.04]} color={theme.secondary} />
          <Panel position={[0.1, -0.72, 0.12]} color={theme.primary} scale={[1.02, 0.34, 0.035]} />
        </>
      )}
    </group>
  );
}

export default function ProjectWorldScene({ project }) {
  return (
    <div className="project-world-scene" aria-hidden="true">
      <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 3.8], fov: 44 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.52} />
        <pointLight position={[3, 4, 3]} intensity={1.2} color="#55d2ff" />
        <pointLight position={[-3, -2, 3]} intensity={0.72} color="#7af35e" />
        <Suspense fallback={null}>
          <ProjectWorld project={project} />
        </Suspense>
      </Canvas>
    </div>
  );
}
