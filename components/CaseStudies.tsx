import React, { useState } from 'react';
import { caseStudiesData } from '../constants';

const CaseStudies: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? caseStudiesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === caseStudiesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const currentCase = caseStudiesData[currentIndex];

    return (
        <section className="py-20 md:py-28">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-12 text-center">
                Erfolgsgeschichten
            </h2>
            <div className="relative max-w-4xl mx-auto bg-[#E5E5DE] rounded-lg shadow-lg p-8 md:p-12 overflow-hidden">
                <div className="flex transition-transform ease-in-out duration-500">
                     {caseStudiesData.map((study, index) => (
                        <div key={index} className="min-w-full" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
                            <div className="flex flex-col items-center text-center">
                                <span className="font-semibold text-gray-500 mb-2">{study.date}</span>
                                <div className="mb-4 h-[50px] flex items-center">
                                    <img src={study.logoUrl} alt={`${study.company} Logo`} className="max-h-full"/>
                                </div>
                                <h3 className="text-2xl font-black text-gray-800 my-4">{study.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-2xl mb-6">{study.description}</p>
                                <a href="#" className="font-bold text-gray-800 hover:text-black transition-colors">
                                    Details anzeigen &rarr;
                                </a>
                            </div>
                        </div>
                     ))}
                </div>
                
                <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition-colors focus:outline-none" aria-label="Previous slide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition-colors focus:outline-none" aria-label="Next slide">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {caseStudiesData.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'} transition-colors`} aria-label={`Go to slide ${index + 1}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
