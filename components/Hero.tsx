import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900">
            Steigern Sie Ihren Umsatz durch KI & Automation.
          </h1>
          <h2 className="text-2xl font-bold text-gray-700">
            Sven Erkens - Ihr Experte für Sales | Automation | KI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Meine langjährige Erfahrung in Vertrieb und Führung zeigt: <strong>Schlanke Prozesse</strong> sind der Schlüssel für den Erfolg. Ich bringe Unternehmergeist und die Kompetenz mit, Sales, Marketing und Kundenbindung durch <strong>pragmatische Lösungen</strong> nahtlos zu verbinden.
          </p>
          <div className="pt-4">
             <a href="#about" className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-700 transition-colors transform hover:scale-105">
                Kostenloses Erstgespräch
              </a>
          </div>

          <div className="mt-16 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              EINE STARKE KOMBINATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-[#E5E5DE] p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-black mb-2">VERTRIEBS-ERFAHRUNG</h3>
                <p className="text-gray-700">
                  Jahrelange Praxis im Sales, inklusive Gründung einer eigenen Vertriebsfirma mit 40 Handelsvertretern.
                </p>
              </div>
              <div className="bg-[#E5E5DE] p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-black mb-2">KI & AUTOMATISIERUNG</h3>
                <p className="text-gray-700">
                  Leidenschaft für Prozesse, Automatisierung und künstliche Intelligenz.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center md:justify-end">
          <img
            src="https://i.imgur.com/kPwx5eN.jpeg"
            alt="Sven Erkens"
            className="rounded-full object-cover w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] shadow-2xl border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;