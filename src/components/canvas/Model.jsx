import { Float, QuadraticBezierLine, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const tempLeft = new THREE.Vector3();
const tempRight = new THREE.Vector3();
const tempMid = new THREE.Vector3();

function AnimatedHuman({ handRefs }) {
  const group = useRef(null);
  const lineRef = useRef(null);
  const leftHand = useRef(null);
  const rightHand = useRef(null);

  const { scene, animations } = useGLTF("/models/human.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const entries = [];
    scene.traverse((obj) => {
      const name = (obj.name || "").toLowerCase();
      if (!leftHand.current && (name.includes("lefthand") || name.includes("hand_l") || name.includes("mixamoriglefthand"))) {
        leftHand.current = obj;
      }
      if (!rightHand.current && (name.includes("righthand") || name.includes("hand_r") || name.includes("mixamorigrighthand"))) {
        rightHand.current = obj;
      }
      entries.push(name);
    });

    if (!leftHand.current || !rightHand.current) {
      console.warn("Human model loaded but hand bones were not found. Check bone names.");
    }
  }, [scene]);

  useEffect(() => {
    if (!actions) return undefined;

    const action = actions[Object.keys(actions)[0]];
    if (!action) return undefined;

    action.reset().fadeIn(0.4).play();
    action.timeScale = 1;

    return () => {
      action.fadeOut(0.25);
    };
  }, [actions]);

  useEffect(() => {
    if (!group.current) return undefined;

    const tween = gsap.to(group.current.position, {
      y: -1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => tween.kill();
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.mouse.x * 0.5, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.mouse.y * 0.2, 0.05);
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.25) * 0.03;

    if (leftHand.current && rightHand.current) {
      leftHand.current.getWorldPosition(tempLeft);
      rightHand.current.getWorldPosition(tempRight);
      tempMid.addVectors(tempLeft, tempRight).multiplyScalar(0.5).add(new THREE.Vector3(0, 0.8, 0));

      handRefs.current.left.copy(tempLeft);
      handRefs.current.right.copy(tempRight);
      handRefs.current.ready = true;

      if (lineRef.current?.setPoints) {
        lineRef.current.setPoints(tempLeft, tempRight, tempMid);
      }
    } else {
      handRefs.current.left.set(-0.95, 0.45, 0.75);
      handRefs.current.right.set(0.95, 0.45, 0.75);
      handRefs.current.ready = true;
    }
  });

  return (
    <group ref={group} position={[0, -1.15, 0]} scale={2.15}>
      <Float speed={1.15} rotationIntensity={0.3} floatIntensity={0.6}>
        <primitive object={scene} position={[0, -2, 0]} />

        <QuadraticBezierLine
          ref={lineRef}
          start={[0, 0, 0]}
          end={[0, 0, 0]}
          mid={[0, 0.5, 0]}
          color="#00ffff"
          lineWidth={2.5}
          transparent
          depthWrite={false}
          opacity={0.92}
        />

        <mesh position={[0.55, 0.95, 0.45]}>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2.3} />
        </mesh>

        <mesh position={[-0.45, 1.1, 0.35]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
        </mesh>
      </Float>
    </group>
  );
}

function ProceduralFallback({ handRefs }) {
  const groupRef = useRef(null);
  const leftHand = useRef(null);
  const rightHand = useRef(null);
  const lineRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.42, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.16, 0.04);
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;

    leftHand.current?.getWorldPosition(tempLeft);
    rightHand.current?.getWorldPosition(tempRight);
    tempMid.addVectors(tempLeft, tempRight).multiplyScalar(0.5).add(new THREE.Vector3(0, 0.9, 0));

    handRefs.current.left.copy(tempLeft);
    handRefs.current.right.copy(tempRight);
    handRefs.current.ready = true;

    if (lineRef.current?.setPoints) {
      lineRef.current.setPoints(tempLeft, tempRight, tempMid);
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.15, 0]}>
      <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.7}>
        <mesh position={[0, 1.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.06, 16, 120]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.85} />
        </mesh>

        <mesh position={[0, 1.35, 0]}>
          <sphereGeometry args={[0.5, 40, 40]} />
          <meshStandardMaterial color="#09111f" emissive="#22d3ee" emissiveIntensity={1.05} roughness={0.18} metalness={0.55} />
        </mesh>

        <mesh position={[0, 0.92, 0]}>
          <cylinderGeometry args={[0.14, 0.18, 0.26, 24]} />
          <meshStandardMaterial color="#0b1220" emissive="#14b8a6" emissiveIntensity={0.25} roughness={0.25} metalness={0.45} />
        </mesh>

        <mesh position={[0, 0.05, 0]}>
          <cylinderGeometry args={[0.72, 0.88, 1.65, 28]} />
          <meshStandardMaterial color="#060b14" emissive="#00c2ff" emissiveIntensity={0.18} roughness={0.22} metalness={0.65} />
        </mesh>

        <mesh position={[0, 0.18, 0.38]}>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.1} />
        </mesh>

        <mesh position={[-0.98, 0.35, 0.06]} rotation={[0, 0, 0.78]} ref={leftHand}>
          <cylinderGeometry args={[0.13, 0.16, 1.5, 18]} />
          <meshStandardMaterial color="#04070c" emissive="#22d3ee" emissiveIntensity={0.12} roughness={0.3} metalness={0.4} />
        </mesh>

        <mesh position={[0.98, 0.35, -0.06]} rotation={[0, 0, -0.78]} ref={rightHand}>
          <cylinderGeometry args={[0.13, 0.16, 1.5, 18]} />
          <meshStandardMaterial color="#04070c" emissive="#14b8a6" emissiveIntensity={0.12} roughness={0.3} metalness={0.4} />
        </mesh>

        <QuadraticBezierLine
          ref={lineRef}
          start={[-0.9, 0.6, 0.2]}
          end={[0.9, 0.6, 0.2]}
          mid={[0, 1.4, 0.2]}
          color="#00ffff"
          lineWidth={2.5}
          transparent
          depthWrite={false}
          opacity={0.92}
        />

        <mesh position={[0, -1.95, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.06, 16, 140]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Model({ handRefs }) {
  const [hasModel, setHasModel] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/models/human.glb", { method: "GET", cache: "no-store" })
      .then((response) => {
        const contentType = response.headers.get("content-type") || "";
        const looksLikeModel =
          contentType.includes("model/gltf-binary") ||
          contentType.includes("model/gltf+json") ||
          contentType.includes("application/octet-stream");

        if (active) {
          setHasModel(response.ok && looksLikeModel);
        }
      })
      .catch(() => {
        if (active) setHasModel(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return hasModel ? <AnimatedHuman handRefs={handRefs} /> : <ProceduralFallback handRefs={handRefs} />;
}
