
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
            <span className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-100 text-sm font-medium mb-6">
              ✈️ Experiências de Viagem Premium
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl title-font mb-8 leading-tight">
            <span className="text-white">Descubra</span>
            <br />
            <span className="gradient-text">Aventuras</span>
            <br />
            <span className="text-white">Extraordinárias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Estamos a trazer inteligência adaptativa onde a paixão por viajar encontra o luxo. 
            Experiências curadas que transformam a sua jornada em memórias inesquecíveis.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToPackages}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Ver Viagens
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
