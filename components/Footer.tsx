import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <div className="mb-4">
             <img src="https://i.imgur.com/3j3OqI4.png" alt="Erkens Consulting Logo" className="h-12 w-auto" />
        </div>
        <div className="flex space-x-6 mb-4">
            <a href="#/impressum" className="text-sm text-gray-400 hover:text-white transition-colors">Impressum</a>
            <a href="#/datenschutz" className="text-sm text-gray-400 hover:text-white transition-colors">Datenschutz</a>
        </div>
        <p className="text-sm text-gray-500">&copy; {currentYear} Erkens Consulting. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;