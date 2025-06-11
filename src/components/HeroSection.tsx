import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import '../styles/hero.css';

const ChalkUnderline = () => (
  <svg
    className="absolute left-0 bottom-0 w-[110%] h-auto text-orange-500 -mb-1 md:-mb-2 lg:-mb-3 -translate-x-[5%]"
    viewBox="0 0 300 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path d="M2.5 11.8161C33.6667 10.3161 161 -2.48395 297.5 5.81605C297.5 5.81605 210.5 12.8161 123 16.3161C123 16.3161 79.1667 17.8161 2.5 11.8161Z" fill="currentColor"/>
  </svg>
);

const HeroSection = () => {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="min-h-screen bg-white px-0 sm:px-4 pt-16 sm:pt-24 pb-16 flex items-center justify-center">
        <div className="relative w-full h-auto min-h-[120vh] sm:h-[75vh] rounded-2xl overflow-hidden mx-4 sm:mx-0">
          {/* Full width background image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=90"
              alt="Paisagem de viagem"
              className="w-full h-full object-cover object-center"
              style={{
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            />
          </div>
          
          {/* Gradient overlay for all screens */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/90 via-blue-900/30 to-transparent"></div>
          

          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-3 sm:px-4 h-full flex flex-col sm:justify-center justify-start pt-[8vh] sm:pt-0 items-center">
            {/* Main content - Top aligned on mobile, centered on desktop */}
            <div className="text-center space-y-6 sm:space-y-8 max-w-4xl">
                <h1 className="font-light text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-white">
                <span className="font-bold">Viva</span> a sua próxima
                <br />
                <span className="relative inline-block px-4">
                  <span className="font-bold">aventura</span>
                  <ChalkUnderline />
                </span> com o Bruno!
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Destinos cuidadosamente selecionados para viver experiências extraordinárias.
              </p>
              
              <div className="flex gap-6 items-center justify-center">
                <Button 
                  onClick={scrollToPackages} 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-none"
                >
                  Explorar Destinos
                </Button>
                <a 
                  href="#about" 
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors duration-300 hidden sm:flex"
                >
                  <span>Saber Mais</span>
                  <span className="text-xl">→</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 flex justify-center items-center gap-4">
                <a href="https://www.instagram.com/brunolopestravel" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/brunolopestravel" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/bruno-lopes-a55a35b/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Floating cards - Visible on all devices */}
            <div className="w-full mt-8 sm:mt-16 lg:mt-24">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-light text-white mb-2">Destinos Exclusivos</h3>
                  <p className="text-white/80 font-light">Explore lugares únicos e experiências inesquecíveis em todo o mundo.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-light text-white mb-2">Viagens Personalizadas</h3>
                  <p className="text-white/80 font-light">Cada itinerário é criado especialmente para si e para as suas preferências.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-light text-white mb-2">Momentos Mágicos</h3>
                  <p className="text-white/80 font-light">Experiências cuidadosamente selecionadas para momentos inesquecíveis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
