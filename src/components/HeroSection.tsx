
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-beach-bg noise-overlay flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-100 text-sm font-medium mb-6">
              ✈️ Experiências de Viagem Únicas
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl title-font mb-8 leading-tight">
            <span className="text-white">Viaje com</span>
            <br />
            <span className="gradient-text">Bruno Lopes</span>
            <br />
            <span className="text-white">Explore o Mundo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialista em criar viagens personalizadas e experiências inesquecíveis. 
            Cada destino é cuidadosamente selecionado para proporcionar momentos únicos e memórias para toda a vida.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToPackages}
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Ver Viagens
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
