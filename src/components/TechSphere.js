import React from 'react';

const TechSphere = ({ tech, color, size, x, y, z }) => {
  return (
    <div 
      className="absolute flex items-center justify-center rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `#${color.toString(16)}`,
        transform: `translate3d(calc(50vw + ${x}px), calc(50vh + ${y}px), ${z}px)`,
        boxShadow: `0 0 20px #${color.toString(16)}`
      }}
    >
      <span className="text-xs font-bold text-white">{tech}</span>
    </div>
  );
};

export default TechSphere;