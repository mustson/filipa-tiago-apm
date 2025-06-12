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
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-gray-900 flex items-baseline">
              <a href="#" className="text-lg font-bold tracking-tight" style={{ fontFamily: design.fonts.title }}>
                {siteConfig.fullTitle}
              </a>
              
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 font-medium transition-colors duration-300 hover:text-orange-500">
              Início
            </a>
            <a href="#packages" className="text-gray-900 font-medium transition-colors duration-300 hover:text-orange-500">
              Viagens
            </a>
            <a href="#about" className="text-gray-900 font-medium transition-colors duration-300 hover:text-orange-500">
              Sobre
            </a>
            <a href="#contact" className="text-gray-900 font-medium transition-colors duration-300 hover:text-orange-500">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
