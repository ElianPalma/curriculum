import React from 'react';

const TechOrbit = ({ tech, level, color }) => {
  const radius = 3 + (level * 1.5);
  const angle = (Math.PI * 2 * Math.random()).toFixed(2);
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);

  return (
    <div 
      className="absolute w-24 h-24 flex items-center justify-center rounded-full border-2 border-opacity-20"
      style={{
        transform: `translate3d(calc(50vw + ${x}rem), calc(50vh + ${z}rem), 0)`,
        borderColor: color,
        animation: `orbit${level} ${10 + level * 2}s linear infinite`,
      }}
    >
      <div 
        className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xs"
        style={{ backgroundColor: color }}
      >
        {tech}
      </div>
    </div>
  );
};

export default TechOrbit;