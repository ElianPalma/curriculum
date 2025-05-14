import React, { useEffect, useRef } from 'react';

const ParticleScene = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crear partículas
    const particles = Array.from({ length: 50 }).map((_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white bg-opacity-20';
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Animación personalizada
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
      
      container.appendChild(particle);
      return particle;
    });

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticleScene;