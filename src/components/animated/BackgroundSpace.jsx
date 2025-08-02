import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styled from "styled-components";
import * as THREE from "three";

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background: black;
`;

/* 🌌 Twinkling Stars */
function Stars({ count = 4000 }) {
  const ref = useRef();

  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 4000,
          (Math.random() - 0.5) * 4000,
          -Math.random() * 4000
        ),
        size: Math.random() * 1.2 + 0.2,
        color: new THREE.Color().setHSL(Math.random(), 1, 0.8),
      });
    }
    return arr;
  }, [count]);

  useFrame(() => {
    ref.current.rotation.y += 0.0001;
    ref.current.children.forEach((star, i) => {
      star.material.opacity = 0.6 + Math.sin(Date.now() * 0.004 + i) * 0.4;
    });
  });

  return (
    <group ref={ref}>
      {stars.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[s.size, 6, 6]} />
          <meshBasicMaterial color={s.color} transparent opacity={1} />
        </mesh>
      ))}
    </group>
  );
}

/* ☄️ Irregular Realistic Meteors */
function Meteors({ count = 25 }) {
  const ref = useRef();

  const meteorShapes = [
    (size) => new THREE.IcosahedronGeometry(size, 1),
    (size) => new THREE.DodecahedronGeometry(size, 0),
    (size) => new THREE.TetrahedronGeometry(size, 1),
    (size) => new THREE.OctahedronGeometry(size, 1),
  ];

  const meteors = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 800,
          (Math.random() - 0.5) * 400,
          -500 - Math.random() * 2000
        ),
        size: 0.5 + Math.random() * 2.5,
        speed: 2 + Math.random() * 8,
        color: new THREE.Color().setHSL(0.05, 0.3, 0.3 + Math.random() * 0.2),
        geom: meteorShapes[Math.floor(Math.random() * meteorShapes.length)],
        rot: new THREE.Vector3(Math.random() * 0.01, Math.random() * 0.01, Math.random() * 0.01),
      })),
    [count]
  );

  useFrame(() => {
    ref.current.children.forEach((m, i) => {
      const d = meteors[i];
      d.pos.z += d.speed;

      // Meteorlar sekin-asta aylansin
      m.rotation.x += d.rot.x;
      m.rotation.y += d.rot.y;
      m.rotation.z += d.rot.z;

      if (d.pos.z > 50) {
        d.pos.set((Math.random() - 0.5) * 800, (Math.random() - 0.5) * 400, -2500);
        d.speed = 2 + Math.random() * 8;
        d.size = 0.5 + Math.random() * 2.5;
      }
      m.position.copy(d.pos);
    });
  });

  return (
    <group ref={ref}>
      {meteors.map((m, i) => (
        <mesh key={i} position={m.pos} geometry={m.geom(m.size)}>
          <meshStandardMaterial color={m.color} roughness={1} metalness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

/* 🎥 Camera Shake */
function CameraShake() {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.5) * 0.5;
    camera.position.y = Math.cos(t * 0.4) * 0.3;
  });
  return null;
}

export default function RealisticMeteorsBackground() {
  return (
    <BackgroundWrapper>
      <Canvas camera={{ position: [0, 0, 70], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[0, 0, 100]} intensity={2.5} color="#ffffff" />
        <Stars />
        <Meteors />
        <CameraShake />
      </Canvas>
    </BackgroundWrapper>
  );
}
