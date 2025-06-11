
import { useState, useEffect } from 'react';

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
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-purple-600"></div>
            <h1 className={`text-2xl title-font transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Bruno Lopes
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Início
            </a>
            <a href="#packages" className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Viagens
            </a>
            <a href="#about" className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Sobre
            </a>
            <a href="#contact" className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
