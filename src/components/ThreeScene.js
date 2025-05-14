import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Configuración básica de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Crear esferas (planetas) para cada tecnología
    const createPlanet = (size, color, x, y, z) => {
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color });
      const planet = new THREE.Mesh(geometry, material);
      planet.position.set(x, y, z);
      scene.add(planet);
      return planet;
    };

    const planets = [
      createPlanet(1.5, 0x3498db, 0, 0, 0), // Sol central (tú)
      createPlanet(0.3, 0xe74c3c, 3, 0, 0), // WordPress
      createPlanet(0.3, 0x2ecc71, -3, 0, 0), // Shopify
      createPlanet(0.25, 0xf1c40f, 0, 0, 3), // React
      createPlanet(0.25, 0x9b59b6, 0, 0, -3), // Vue
    ];

    // Añadir luces
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    // Animación
    camera.position.z = 10;
    const animate = () => {
      requestAnimationFrame(animate);
      planets.forEach((planet, i) => {
        if(i > 0) { // No rotar el sol central
          planet.rotation.y += 0.01;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    // Manejo de redimensionamiento
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default ThreeScene;