"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

// 내부의 회전하는 큐브들
function Tesseract() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (!outerRef.current || !innerRef.current || !coreRef.current) return;
    
    // 마우스 올리면 회전 속도 2배
    const speed = hovered ? 2 : 1;

    // 바깥 큐브 회전
    outerRef.current.rotation.x += delta * 0.2 * speed;
    outerRef.current.rotation.y += delta * 0.3 * speed;

    // 안쪽 큐브 (반대 방향 회전)
    innerRef.current.rotation.x -= delta * 0.4 * speed;
    innerRef.current.rotation.y -= delta * 0.4 * speed;

    // 코어 (빠르게 회전)
    coreRef.current.rotation.x += delta * 1.0;
    coreRef.current.rotation.z += delta * 1.0;
  });

  return (
    <group 
      onPointerOver={() => setHover(true)} 
      onPointerOut={() => setHover(false)}
    >
      {/* 1. 가장 바깥 큐브 (와이어프레임) */}
      <mesh ref={outerRef}>
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        <meshStandardMaterial 
          color={hovered ? "#fff" : "#a8a8a8"} 
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* 2. 중간 큐브 (와이어프레임) */}
      <mesh ref={innerRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#fff" 
          wireframe 
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* 3. 가장 안쪽 코어 (솔리드) */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#fff" 
          emissive="#fff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

const CyberArtifact = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* 둥둥 떠다니는 효과 */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Tesseract />
        </Float>
        
        {/* 배경에 은은한 별가루 */}
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default CyberArtifact;