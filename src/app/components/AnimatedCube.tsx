'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';

function Cube() {
  return (
    <mesh rotation={[0.4, 0.6, 0.1]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#4FD1C5" transparent opacity={0.18} />
      <Edges scale={1.1} color="#fff" />
      <mesh scale={0.5}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#c75ceb" transparent opacity={0.12} />
        <Edges scale={1.1} color="#fff" />
      </mesh>
    </mesh>
  );
}

export default function AnimatedCube() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ background: 'transparent', width: '100%', height: '100%' }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Cube />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
} 