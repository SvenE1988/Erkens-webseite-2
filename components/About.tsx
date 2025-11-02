import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-12">
        ÜBER SVEN
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img
          src="https://i.imgur.com/G53wI3h.jpeg"
          alt="Sven Erkens with his family"
          className="rounded-lg object-cover w-full shadow-xl"
        />
        <div className="space-y-6">
          <h3 className="text-3xl font-black text-gray-800">FOKUS AUF DAS WESENTLICHE</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Was ich im Business als klaren Fokus fordere, lebe ich privat.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ich wohne in <strong>Karlsruhe</strong> mit meiner Frau <strong>Valentina</strong> und unserem 2-jährigen Sohn <strong>Mike</strong>. Diese kleine Familie ist mein wichtigster Anker. Ich schaffe Struktur im Job, um die anderen Prioritäten im Leben halten zu können.
          </p>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">E-MAIL</h4>
            <a href="mailto:se@erkens-consulting.de" className="text-lg text-gray-800 hover:text-black transition-colors">se@erkens-consulting.de</a>
          </div>
           <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">TELEFON</h4>
            <a href="tel:+4917635888696" className="text-lg text-gray-800 hover:text-black transition-colors">0176 35888696</a>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-2">LINKEDIN</h4>
            <a href="https://linkedin.com/in/svenerkens" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-800 hover:text-black transition-colors">linkedin.com/in/svenerkens</a>
          </div>
      </div>
      
      <div className="mt-16 text-center">
          <a href="mailto:se@erkens-consulting.de" className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-700 transition-colors transform hover:scale-105">
            Jetzt Kontakt aufnehmen
          </a>
      </div>
    </section>
  );
};

export default About;