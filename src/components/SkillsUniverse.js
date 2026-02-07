import React from 'react';
import SkillPlanet from './SkillPlanet';
import elianImage from './elian.png';

 

const SkillsUniverse = () => {
  const skills = [
    { skill: "WordPress", color: "#21759b", size: 80, distance: 200, speed: 0.2 },
    { skill: "Woocommerce", color: "#96588a", size: 70, distance: 220, speed: 0.18 },
    { skill: "Elementor", color: "#92003b", size: 65, distance: 240, speed: 0.16 },
    { skill: "Divi", color: "#6c4fbb", size: 70, distance: 260, speed: 0.15 },
    { skill: "WP-Backery", color: "#25b1d0", size: 65, distance: 280, speed: 0.14 },
    { skill: "LearnDash", color: "#1e8cbe", size: 60, distance: 300, speed: 0.13 },
    { skill: "Yoast SEO", color: "#a4286a", size: 65, distance: 180, speed: 0.25 },
    { skill: "Shopify", color: "#7ab55c", size: 75, distance: 160, speed: 0.28 },
    { skill: "Prestashop", color: "#e07f1f", size: 70, distance: 140, speed: 0.3 },
    { skill: "Webflow", color: "#4353ff", size: 65, distance: 120, speed: 0.32 },
    { skill: "Magento", color: "#f46f25", size: 70, distance: 100, speed: 0.35 },
    { skill: "Drupal", color: "#0678be", size: 65, distance: 80, speed: 0.4 },
    { skill: "HTML5", color: "#e34c26", size: 80, distance: 250, speed: -0.15 },
    { skill: "CSS3", color: "#2965f1", size: 80, distance: 270, speed: -0.14 },
    { skill: "JavaScript", color: "#f0db4f", size: 85, distance: 290, speed: -0.13 },
    { skill: "ECMAScript", color: "#f7df1e", size: 70, distance: 310, speed: -0.12 },
    { skill: "PHP", color: "#777bb4", size: 75, distance: 330, speed: -0.11 },
    { skill: "MySQL", color: "#00758f", size: 65, distance: 350, speed: -0.1 },
    { skill: "Bootstrap", color: "#563d7c", size: 70, distance: 150, speed: -0.22 },
    { skill: "React.js", color: "#61dafb", size: 85, distance: 170, speed: -0.2 },
    { skill: "Angular.js", color: "#dd0031", size: 70, distance: 190, speed: -0.18 },
    { skill: "Vue.js", color: "#42b883", size: 75, distance: 210, speed: -0.16 },
    { skill: "Three.js", color: "#049ef4", size: 65, distance: 230, speed: -0.14 },
    { skill: "Laravel", color: "#ff2d20", size: 80, distance: 250, speed: -0.12 },
    { skill: "Liferay", color: "#0b5fff", size: 70, distance: 270, speed: -0.1 },
    { skill: "Photoshop", color: "#31a8ff", size: 65, distance: 130, speed: 0.24 },
    { skill: "Illustrator", color: "#ff9a00", size: 65, distance: 110, speed: 0.26 },
    { skill: "Figma", color: "#a259ff", size: 70, distance: 90, speed: 0.3 },
    { skill: "Google ADS", color: "#4285f4", size: 60, distance: 70, speed: 0.35 },
    { skill: "Analytics", color: "#ff6d01", size: 65, distance: 50, speed: 0.4 },
    { skill: "Git", color: "#f05032", size: 75, distance: 300, speed: 0.1 },
    { skill: "GTM", color: "#246fdb", size: 60, distance: 320, speed: 0.09 },
    { skill: "SEO", color: "#0c9b49", size: 70, distance: 340, speed: 0.08 },
    { skill: "Hosting", color: "#0070f3", size: 65, distance: 360, speed: 0.07 },
    { skill: "Flatsome", color: "#0070f3", size: 65, distance: 360, speed: 0.07 },
    { skill: "Dominios", color: "#1a73e8", size: 60, distance: 380, speed: 0.06 }
  ];

  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      {skills.map((skill, i) => (
        <SkillPlanet
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          size={skill.size}
          distance={skill.distance}
          speed={skill.speed}
          index={i}
        />
      ))}
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 rounded-full bg-gray-900 border-4 border-purple-500 flex items-center justify-center shadow-2xl animate-pulse">
          <img 
            src={elianImage} 
            alt="Mi foto" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="w-40 h-40 rounded-full bg-gray-900 border-purple-500 flex items-center justify-center shadow-2xl animate-pulse">
          <a href='https://elianpalma.netlify.app/'
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
            style={{ cursor: 'none' }}
          >
            <span className="relative z-10">Volver</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
        
      </div>


      
    </div>
    
  );
};



export default SkillsUniverse;