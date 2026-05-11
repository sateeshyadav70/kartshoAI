import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Lights from "./Lights";
import Particles from "./Particles";

export default function Scene() {
  const handRefs = useRef({
    left: new THREE.Vector3(-0.9, 0.4, 0.6),
    right: new THREE.Vector3(0.9, 0.4, 0.6),
    ready: false,
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
      }}
    >
      <fog attach="fog" args={["#02040a", 6, 18]} />

      <Suspense fallback={null}>
        <Lights />
        <Particles handRefs={handRefs} />
        <EffectComposer>
          <Bloom intensity={1.8} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
