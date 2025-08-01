import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;            
  background: transparent;
  pointer-events: none;  
`;

function useMouse3D() {
  const { camera } = useThree();
  const mouse = useRef(new THREE.Vector2());
  const raycaster = useRef(new THREE.Raycaster());
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersection = new THREE.Vector3();
  const point = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    raycaster.current.setFromCamera(mouse.current, camera);
    raycaster.current.ray.intersectPlane(plane, intersection);
    point.current.lerp(intersection, 0.1);
  });

  return point;
}

function CatModel() {
  const { scene, animations } = useGLTF("/cat.glb");
  const catRef = useRef();
  const { actions } = useAnimations(animations, catRef);
  const target = useMouse3D();

  useEffect(() => {
    if (actions) {
      const idle = actions["Idle"] || Object.values(actions)[0];
      idle?.play();
    }
  }, [actions]);

  useFrame(() => {
    if (!catRef.current) return;
    catRef.current.position.lerp(target.current, 0.08);

    const dir = new THREE.Vector3().subVectors(target.current, catRef.current.position);
    if (dir.length() > 0.01) catRef.current.rotation.y = Math.atan2(dir.x, dir.z);

    if (actions) {
      const walk = actions["Walk"] || actions["walk"];
      const idle = actions["Idle"];
      if (dir.length() > 0.02) {
        walk?.play();
        idle?.stop();
      } else {
        walk?.stop();
        idle?.play();
      }
    }
  });

  scene.traverse((c) => {
    if (c.isMesh) {
      c.castShadow = false;
      c.receiveShadow = false;
    }
  });

  return <primitive ref={catRef} object={scene} scale={1.2} />;
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 10]} intensity={2} />
    </>
  );
}

const ImbaBackground = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const canvas = wrapperRef.current?.querySelector("canvas");
    if (canvas) canvas.style.pointerEvents = "none";
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        camera={{ position: [0, 15, 30], fov: 50 }}
      >
        <SceneLights />
        <Suspense fallback={null}>
          <CatModel />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </Wrapper>
  );
};

export default ImbaBackground;
