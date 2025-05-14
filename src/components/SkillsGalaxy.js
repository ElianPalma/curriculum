import React from 'react';
import AnimatedOrb from './AnimatedOrb';

const SkillsGalaxy = () => {
  const skills = [
    { tech: "WordPress", color: "#21759b", size: 80, delay: 0 },
    { tech: "Shopify", color: "#7ab55c", size: 70, delay: 2 },
    { tech: "React", color: "#61dafb", size: 60, delay: 4 },
    { tech: "JavaScript", color: "#f0db4f", size: 75, delay: 1 },
    { tech: "PHP", color: "#777bb4", size: 65, delay: 3 },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-xl">
          <span className="text-white font-bold text-xl">Tú</span>
        </div>
      </div>
      
      {skills.map((skill, i) => (
        <AnimatedOrb 
          key={skill.tech}
          tech={skill.tech}
          color={skill.color}
          size={skill.size}
          delay={skill.delay}
        />
      ))}
    </div>
  );
};

export default SkillsGalaxy;