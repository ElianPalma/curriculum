import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Crear estrellas
    const stars = Array.from({ length: 300 }).map((_, i) => {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white';
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.opacity = Math.random();
      star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;
      
      container.appendChild(star);
      return star;
    });

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
};

export default GalaxyBackground;