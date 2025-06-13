import { useState, useEffect } from 'react';
import { siteConfig, agentConfig, design } from '@/config';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-screen-xl flex items-center justify-between px-0 mx-auto">
          <div className="flex-1 flex items-center pl-4 sm:pl-6 md:pl-10">
            <a href="#" className="flex items-center py-3 sm:py-4">
              <img 
                src="/branding/filipa_tiago_apm.png" 
                alt={`${agentConfig.fullName} - ${siteConfig.tagline}`}
                className={`${design.logo.mobile.height} w-auto sm:${design.logo.desktop.height}`}
              />
            </a>
          </div>
          
          <div className="hidden md:flex flex-1 items-center justify-end space-x-10 pr-4 sm:pr-6 md:pr-10">
            <a href="#home" className="text-gray-900 font-medium transition-colors duration-300 hover:text-cyan-700">
              Início
            </a>
            <a href="#packages" className="text-gray-900 font-medium transition-colors duration-300 hover:text-cyan-700">
              Viagens
            </a>
            <a href="#about" className="text-gray-900 font-medium transition-colors duration-300 hover:text-cyan-700">
              Sobre
            </a>
            <a href="#contact" className="text-gray-900 font-medium transition-colors duration-300 hover:text-cyan-700">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
