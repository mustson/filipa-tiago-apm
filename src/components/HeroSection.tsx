import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 hero-beach-bg opacity-30"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Descubra o Mundo com as</span>
            <br />
            <span className="text-orange-400">Experiências Únicas</span>
            <br />
            <span className="text-white">do Bruno</span>
          </h1>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Bruno Lopes é o seu personal experience traveler designer.
            Cada destino é cuidadosamente selecionado para criar experiências extraordinárias.
          </p>
          
          <div className="flex gap-4 items-center justify-center mt-12">
            <Button 
              onClick={scrollToPackages}
              size="lg"
              className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Explorar Destinos
            </Button>
            <a href="#about" className="text-white/90 hover:text-white font-medium transition-colors duration-300">
              Saiba Mais →
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
