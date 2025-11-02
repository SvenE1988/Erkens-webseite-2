
import React from 'react';
import { skillsData } from '../constants';

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => (
  <div className="bg-[#E5E5DE] p-8 rounded-lg shadow-sm">
    <h3 className="text-2xl font-black mb-6">{title}</h3>
    <ul className="space-y-3 list-disc list-inside text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
       <li>...</li>
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-12">
        FÄHIGKEITEN & TOOLS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillCard title="TOOLS" items={skillsData.tools} />
        <SkillCard title="KI APIS / MCPS" items={skillsData.apis} />
        <SkillCard title="CRM-SYSTEME" items={skillsData.crms} />
        <SkillCard title="KOMPETENZEN" items={skillsData.competencies} />
      </div>
    </section>
  );
};

export default Skills;
