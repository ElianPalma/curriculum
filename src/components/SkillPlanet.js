import React, { useEffect, useRef } from 'react';

const SkillPlanet = ({ skill, color, size, distance, speed, index }) => {
  const planetRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const planet = planetRef.current;
    const orbit = orbitRef.current;
    if (!planet || !orbit) return;

    let angle = (360 / 12) * index;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const animate = () => {
      angle += speed;
      const radian = angle * Math.PI / 180;
      const x = centerX + distance * Math.cos(radian) - size/2;
      const y = centerY + distance * Math.sin(radian) - size/2;
      
      planet.style.transform = `translate3d(${x}px, ${y}px, 0) rotateY(${angle}deg)`;
      orbit.style.transform = `translate3d(${centerX - distance}px, ${centerY - 2}px, 0) rotateZ(${angle}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [distance, size, speed, index]);

  return (
    <>
      <div
        ref={orbitRef}
        className="absolute w-1 h-1 bg-transparent"
        style={{
          width: `${distance * 2}px`,
          left: '50%',
          top: '50%',
        }}
      />
      <div
        ref={planetRef}
        className="absolute flex items-center justify-center rounded-full text-white font-bold text-sm cursor-code hover:scale-150 hover:shadow-3d transition-all duration-500"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          boxShadow: `0 0 20px ${color}, inset 0 0 10px rgba(255,255,255,0.5)`,
          zIndex: 10,
          transformStyle: 'preserve-3d',
        }}
        data-skill={skill}
      >
        <div 
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 30%, white, ${color})`,
            transform: 'translateZ(10px)'
          }}
        />
        {skill}
      </div>
    </>
  );
};

export default SkillPlanet;