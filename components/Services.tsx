
import React from 'react';
import { RocketIcon, LeadIcon, ProcessIcon, KnowledgeIcon } from '../constants';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-6">
    <div className="flex-shrink-0 text-gray-700">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-black mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-12">
        PROJEKT ARTEN
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        <ServiceCard
          icon={<RocketIcon className="w-10 h-10" />}
          title="VERTRIEBS-OPS & SALES ENABLEMENT"
          description="Automatisierung von Verkaufsprozessen und Tools zur Unterstützung des Vertriebsteams"
        />
        <ServiceCard
          icon={<LeadIcon className="w-10 h-10" />}
          title="LEAD & DATEN-INTELLIGENZ"
          description="Intelligente Lead-Qualifizierung und datengetriebene Verkaufsentscheidungen"
        />
        <ServiceCard
          icon={<ProcessIcon className="w-10 h-10" />}
          title="PROZESS & BACK-OFFICE"
          description="Optimierung administrativer Abläufe und Automatisierung von Routineaufgaben"
        />
        <ServiceCard
          icon={<KnowledgeIcon className="w-10 h-10" />}
          title="WISSEN & KI-INFRASTRUKTUR"
          description="Aufbau intelligenter Wissenssysteme und KI-gestützter Assistenten"
        />
      </div>
    </section>
  );
};

export default Services;
