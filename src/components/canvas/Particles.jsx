import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { inSphere } from "maath/random";

const COUNT = 2000;

export default function Particles({ handRefs }) {
  const pointsRef = useRef(null);
  const positions = useMemo(
    () => inSphere(new Float32Array(COUNT * 3), { radius: 3.4 }),
    []
  );

  useFrame((state) => {
    const point = pointsRef.current;
    if (!point) return;

    const left = handRefs.current.left;
    const right = handRefs.current.right;
    const elapsed = state.clock.elapsedTime;

    for (let i = 0; i < COUNT; i += 1) {
      const i3 = i * 3;
      const target = i < COUNT / 2 ? left : right;

      const swayX = Math.sin(elapsed * 1.2 + i * 0.11) * 0.12;
      const swayY = Math.cos(elapsed * 1.4 + i * 0.13) * 0.12;
      const swayZ = Math.sin(elapsed * 0.8 + i * 0.09) * 0.08;

      positions[i3] += (target.x + swayX - positions[i3]) * 0.02;
      positions[i3 + 1] += (target.y + swayY - positions[i3 + 1]) * 0.02;
      positions[i3 + 2] += (target.z + swayZ - positions[i3 + 2]) * 0.02;
    }

    point.rotation.y = elapsed * 0.04;
    point.rotation.z = Math.sin(elapsed * 0.2) * 0.03;
    point.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#7df9ff"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        fog={false}
        opacity={0.9}
      />
    </Points>
  );
}
