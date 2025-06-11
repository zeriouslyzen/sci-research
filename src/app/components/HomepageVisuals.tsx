'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type HomepageVisualsProps = {
  overlayOpacity: number;
  overlayProgress: number;
};

export default function HomepageVisuals({}: HomepageVisualsProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene: THREE.Scene = new THREE.Scene();
    scene.background = null; // Make scene background transparent
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ alpha: true });
    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const shardData = [
      { name: 'NSSE', position: new THREE.Vector3(0.8, 0.8, 0.8) },
      { name: '⌖ Collapse Logic', position: new THREE.Vector3(-0.8, 0.8, -0.8) },
      { name: 'Sovereign Alignment', position: new THREE.Vector3(0.8, -0.8, -0.8) },
      { name: 'Phase-Conscious Compute', position: new THREE.Vector3(-0.8, -0.8, 0.8) },
      { name: 'Entropic Memory', position: new THREE.Vector3(0, 1.2, 0) }
    ];
    const shardLabels: { div: HTMLDivElement, position: THREE.Vector3 }[] = [];

    if (!mountRef.current) return;
    const container = mountRef.current;
    // Set up scene
    camera.position.z = 5;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Starfield
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars: THREE.Points = new THREE.Points(starGeometry, new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.5,
      transparent: true,
      opacity: 0.8
    }));
    scene.add(stars);

    // Lattice (outer cube)
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const edges = new THREE.EdgesGeometry(geometry);
    const lattice: THREE.LineSegments = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: false, opacity: 1 }));
    (lattice.geometry as THREE.BufferGeometry).setAttribute('initialPosition', lattice.geometry.getAttribute('position').clone());
    // Inner lattice
    const innerLattice = lattice.clone();
    innerLattice.scale.set(0.5, 0.5, 0.5);
    lattice.add(innerLattice);
    scene.add(lattice);

    // Shard labels
    shardData.forEach(data => {
      const div = document.createElement('div');
      div.className = 'data-shard-label';
      div.textContent = data.name;
      container.appendChild(div);
      shardLabels.push({ div, position: data.position });
    });

    // Smooth scroll handling
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let targetMorphProgress = 0;
    let currentMorphProgress = 0;
    const rotationSpeed = 0.05;
    const morphSpeed = 0.05;

    // Device orientation handling
    function onDeviceOrientation(event: DeviceOrientationEvent) {
      if (event.beta && event.gamma) {
        // Convert device orientation to mouse-like coordinates
        mouseX = (event.gamma * 2); // Left/right tilt
        mouseY = (event.beta * 2);  // Forward/backward tilt
      }
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - windowHalfX) / 10;
      mouseY = (event.clientY - windowHalfY) / 10;
    }

    function onScroll() {
      const scrollY = window.scrollY;
      const pageHeight = window.innerHeight * 4;
      const scrollPercent = scrollY / (pageHeight - window.innerHeight);
      
      // Update target rotations
      targetRotationX = scrollPercent * Math.PI;
      targetRotationY = scrollPercent * Math.PI * 2;
      
      // Update target morph progress
      targetMorphProgress = Math.max(0, Math.min(1, (scrollPercent - 0.6) / 0.3));
      
      // Update label opacity
      shardLabels.forEach(label => {
        if (label.div) {
          label.div.style.opacity = '1';
        }
      });
    }

    function toScreenPosition(worldPosition: THREE.Vector3, camera: THREE.Camera) {
      const vector = worldPosition.clone();
      vector.project(camera);
      vector.x = (vector.x * window.innerWidth / 2) + window.innerWidth / 2;
      vector.y = -(vector.y * window.innerHeight / 2) + window.innerHeight / 2;
      return { x: vector.x, y: vector.y };
    }

    function updateMorphing() {
      const initialPositions = lattice.geometry.getAttribute('initialPosition');
      const currentPositions = lattice.geometry.getAttribute('position');
      
      for (let i = 0; i < currentPositions.count; i++) {
        const vec = new THREE.Vector3(
          initialPositions.getX(i),
          initialPositions.getY(i),
          initialPositions.getZ(i)
        ).normalize().multiplyScalar(2);
        
        currentPositions.setX(i, THREE.MathUtils.lerp(initialPositions.getX(i), vec.x, currentMorphProgress));
        currentPositions.setY(i, THREE.MathUtils.lerp(initialPositions.getY(i), vec.y, currentMorphProgress));
        currentPositions.setZ(i, THREE.MathUtils.lerp(initialPositions.getZ(i), vec.z, currentMorphProgress));
      }
      currentPositions.needsUpdate = true;
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      
      // Smooth camera movement
      camera.position.x += (mouseX / 100 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY / 100 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      // Smooth rotation interpolation
      currentRotationX += (targetRotationX - currentRotationX) * rotationSpeed;
      currentRotationY += (targetRotationY - currentRotationY) * rotationSpeed;
      lattice.rotation.x = currentRotationX;
      lattice.rotation.y = currentRotationY;
      
      // Smooth morphing interpolation
      currentMorphProgress += (targetMorphProgress - currentMorphProgress) * morphSpeed;
      updateMorphing();
      
      // Continuous rotation
      lattice.rotation.x += 0.0005;
      lattice.rotation.y += 0.0005;
      lattice.children[0].rotation.x -= 0.0003;
      lattice.children[0].rotation.y -= 0.0003;
      stars.rotation.y += 0.0001;
      
      lattice.updateMatrixWorld();
      
      // Update label positions
      shardLabels.forEach(label => {
        const worldPos = label.position.clone().applyMatrix4(lattice.matrixWorld);
        const screenPos = toScreenPosition(worldPos, camera);
        if (label.div) {
          label.div.style.left = `${screenPos.x}px`;
          label.div.style.top = `${screenPos.y}px`;
        }
      });
      
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
    
    onScroll();
    animate();
    
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('deviceorientation', onDeviceOrientation);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 10, pointerEvents: 'none' }}
    />
  );
} 