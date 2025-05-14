import React from 'react';

const TechBubble = ({ tech, color, size }) => {
  return (
    <div 
      className="absolute rounded-full flex items-center justify-center text-white font-medium shadow-lg transform hover:scale-110 transition-transform"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
        animation: `float ${Math.random() * 5 + 5}s infinite ease-in-out`
      }}
    >
      {tech}
    </div>
  );
};

export default TechBubble;