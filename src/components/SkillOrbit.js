import React, { useEffect, useRef } from 'react';

const SkillOrbit = ({ skill, color, size, distance, speed }) => {
  const orbitRef = useRef(null);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    let angle = 0;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const animate = () => {
      angle += speed;
      const x = centerX + distance * Math.cos(angle * Math.PI / 180) - size/2;
      const y = centerY + distance * Math.sin(angle * Math.PI / 180) - size/2;
      
      orbit.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${angle}deg) rotateY(${angle}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [distance, size, speed]);

  return (
    <div
      ref={orbitRef}
      className="absolute flex items-center justify-center rounded-full text-white font-bold text-sm cursor-pointer hover:scale-125 transition-transform duration-300"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        boxShadow: `0 0 20px ${color}`,
        zIndex: 10,
      }}
    >
      {skill}
    </div>
  );
};

export default SkillOrbit;