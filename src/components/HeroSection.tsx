import { Button } from '@/components/ui/button';
import { agentConfig, design, siteConfig } from '@/config';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
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
      <section id="home" className="min-h-screen bg-white px-0 sm:px-4 pt-24 sm:pt-24 pb-16 flex items-center justify-center">
        <div className="relative w-full h-auto min-h-[100vh] sm:h-[75vh] rounded-2xl overflow-hidden mx-4 sm:mx-0">
          {/* Full width background image */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/branding/riviera_maia.avif"
              alt="Riviera Maya"
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
          
          {/* Gradient overlay for all screens - using configuration from design file */}
          <div className={`absolute inset-0 z-10 bg-gradient-to-b ${design.heroGradients.mobile} sm:${design.heroGradients.desktop}`}></div>
          

          
          <div className="relative z-20 w-full mx-auto px-2 md:px-4 h-full flex flex-col sm:justify-center justify-start pt-[8vh] sm:pt-0 items-center">
            {/* Main content - Top aligned on mobile, centered on desktop */}
            <div className="text-center space-y-6 sm:space-y-8 w-full">
              <h1
                className={`${design.headings.classes.hero} text-white mt-2 w-full mx-auto px-4 md:px-12`}
                style={{ fontFamily: design.fonts.title }}
              >
                {siteConfig.sections.hero.titleStart}
                <span style={{ color: '#EAB308' }}>{siteConfig.sections.hero.titleHighlight}</span>
                {siteConfig.sections.hero.titleEnd}
              </h1>
              
              <p className="text-xl text-white/90 w-full max-w-5xl mx-auto leading-relaxed px-4">
                {siteConfig.sections.hero.description}
              </p>
              
              <div className="flex gap-6 items-center justify-center">
                <Button 
                  onClick={scrollToPackages} 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-normal rounded-xl transition-all duration-300 shadow-none"
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
                <a href="https://www.instagram.com/filipa_tiago_apm" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/filipa.tiago.viagensemfamilia" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/viagensemfamilia" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/20">
                    <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Floating cards - Visible on all devices */}
            <div className="w-full mt-8 sm:mt-16 lg:mt-24">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4 mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer">
                  <h3 className="text-xl font-normal text-white mb-2">Curadoria Especializada</h3>
                  <p className="text-white/80">Esqueça os guias turísticos. Criamos roteiros baseados em experiências reais, para que você conheça o coração de cada destino.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer">
                  <h3 className="text-xl font-normal text-white mb-2">Planejamento Completo</h3>
                  <p className="text-white/80">Do seu hotel aos seus jantares, cuidamos de cada detalhe. A sua única preocupação é aproveitar a viagem.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer">
                  <h3 className="text-xl font-normal text-white mb-2">Suporte Total</h3>
                  <p className="text-white/80">Estamos disponíveis 24/7 durante a sua viagem para garantir que tudo corra perfeitamente. Viaje com tranquilidade.</p>
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
