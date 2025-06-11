import { Button } from '@/components/ui/button';
import '../styles/hero.css';

const HeroSection = () => {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="h-screen bg-white px-4 pt-16 pb-8 flex items-center justify-center">
        <div className="relative w-full max-w-[95%] h-[90vh] md:h-[85vh] rounded-[2.5rem] overflow-hidden">
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
          
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/30 to-transparent h-1/2"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent h-1/2 top-1/2"></div>
          
          <div className="relative w-full max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center">
            {/* Main content - Centered */}
            <div className="text-center space-y-8 max-w-4xl">
              <h1 className="font-light text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-white">
                Planeie a sua próxima
                <br />
                aventura com o Bruno!
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Bruno Lopes é o seu personal experience traveler designer. Destinos cuidadosamente selecionados para viver experiências extraordinárias.
              </p>
              
              <div className="flex gap-6 items-center justify-center">
                <Button 
                  onClick={scrollToPackages}
                  size="lg"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-6 text-lg font-light rounded-xl transition-all duration-300"
                >
                  Explorar Destinos
                </Button>
                <a href="#about" className="text-white/90 hover:text-white font-light transition-colors duration-300">
                  Saber Mais →
                </a>
              </div>
            </div>

            {/* Floating cards - Only visible on desktop */}
            <div className="hidden md:block w-full mt-16 lg:mt-24">
              <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-light text-white mb-2">Destinos Exclusivos</h3>
                  <p className="text-white/80 font-light">Explore lugares únicos e experiências inesquecíveis em todo o mundo.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-light text-white mb-2">Viagens Personalizadas</h3>
                  <p className="text-white/80 font-light">Cada roteiro é criado especialmente para si e as suas preferências.</p>
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

      {/* Mobile cards section - Outside hero, single column */}
      <section className="md:hidden bg-white px-4 py-12">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6">
            <h3 className="text-xl font-light text-white mb-2">Destinos Exclusivos</h3>
            <p className="text-white/80 font-light">Explore lugares únicos e experiências inesquecíveis em todo o mundo.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6">
            <h3 className="text-xl font-light text-white mb-2">Viagens Personalizadas</h3>
            <p className="text-white/80 font-light">Cada roteiro é criado especialmente para si e as suas preferências.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-6">
            <h3 className="text-xl font-light text-white mb-2">Momentos Mágicos</h3>
            <p className="text-white/80 font-light">Experiências cuidadosamente selecionadas para momentos inesquecíveis.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
