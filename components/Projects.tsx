
import React, { useState, useMemo } from 'react';
import { projectsData } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#E5E5DE] p-6 rounded-lg shadow-sm flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-black mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="mb-4">
            <h4 className="font-bold text-xs uppercase text-gray-500 mb-1">Problem &amp; Lösung</h4>
            <p className="text-gray-700 text-sm">{project.problemSolution}</p>
        </div>
      </div>
      <div className="mt-auto pt-4">
        <span className="text-xs font-bold bg-gray-300 text-gray-700 px-2 py-1 rounded-full">{project.coreTech}</span>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const categories = useMemo(() => [...new Set(projectsData.map(p => p.category))], []);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProjects = projectsData.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-8">
        AUSGEWÄHLTE PROJEKTE
      </h2>
      
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
