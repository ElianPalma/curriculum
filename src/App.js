import React, { useState } from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import SkillsUniverse from './components/SkillsUniverse';
import CustomCursor from './components/CustomCursor';
import pdfespañol from './components/archivos/cvelian2026.pdf';
import './styles.css';

const App = () => {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden cursor-none">
      <GalaxyBackground />
      <CustomCursor />

      {showSkills ? (
        <SkillsUniverse />
      ) : (
        <div className="relative z-10 h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-6 text-center">Habilidades Técnicas</h1>
          <p className="text-2xl text-gray-300 mb-12 text-center max-w-2xl px-4">
            Desarrollador web full-stack con experiencia en múltiples tecnologías
          </p>
          <button
            onClick={() => setShowSkills(true)}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
            style={{ cursor: 'none' }} // Agrega esta línea para quitar el cursor por defecto
          >
            <span className="relative z-10">Explorar Habilidades</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
                    <a href={pdfespañol}
            className="mt-5 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group"
            style={{ cursor: 'none' }} // Agrega esta línea para quitar el cursor por defecto
          >
            <span className="relative z-10">Descargar Curriculum Vitae</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;