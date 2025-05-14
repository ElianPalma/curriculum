import React from 'react';

const ExperienceSection = () => {
  const experiences = [{
    id: 1,
    title: "Desarrollo Web Full Stack",
    company: "CUID",
    period: "2023 - Presente",
    description: "Desarrollo de soluciones web completas utilizando diversas tecnologías y plataformas.",
    technologies: ["WordPress", "Shopify", "React", "Vue", "JavaScript", "PHP", "CSS", "HTML"]
  }];

  return (
    <div className="relative z-10 max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Experiencia Profesional</h2>
      <div className="space-y-8">
        {experiences.map(exp => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-purple-500">
            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500"></div>
            <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
              <p className="text-purple-300 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;