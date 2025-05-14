import React from 'react';

const AnimatedOrb = ({ tech, color, size, delay }) => {
  return (
    <div 
      className="absolute rounded-full flex items-center justify-center text-white font-medium shadow-lg"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        animation: `orbit ${15 + delay}s linear infinite`,
        zIndex: 1,
      }}
    >
      {tech}
    </div>
  );
};

export default AnimatedOrb;