import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#services', label: 'Leistungen' },
        { href: '#projects', label: 'Projekte' },
        { href: '#case-studies', label: 'Fallstudien' },
        { href: '#about', label: 'Über Mich' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F1F1EB]/80 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#top" className="flex-shrink-0">
                        <img src="https://i.imgur.com/3j3OqI4.png" alt="Erkens Consulting Logo" className="h-10 w-auto" />
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <a key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 font-semibold transition-colors">{link.label}</a>
                        ))}
                    </nav>

                     <div className="hidden md:flex">
                        <a href="#about" className="bg-gray-800 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                            Kontakt
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menü öffnen">
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <nav className="flex flex-col space-y-4 items-center">
                            {navLinks.map(link => (
                                 <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 font-semibold transition-colors py-2">{link.label}</a>
                            ))}
                             <a href="#about" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-base hover:bg-gray-700 transition-colors mt-2">
                                Kontakt
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;