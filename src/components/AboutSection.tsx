import { agentConfig, design, siteConfig } from "@/config";
import { MapPin, Clock, Gem, Calendar } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Itinerários Personalizados",
      description: "Viagens desenhadas à sua medida."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Assistência durante a sua viagem."
    },
    {
      icon: Gem,
      title: "Experiências Exclusivas",
      description: "Acesso a locais e atividades únicas."
    },
    {
      icon: Calendar,
      title: "Reservas Flexíveis",
      description: "Opções que se adaptam aos seus planos."
    }
  ];

  return (
    <section id="about" className="min-h-screen pt-20 sm:pt-28 pb-16 sm:pb-20 bg-white px-0 sm:px-4 flex items-center justify-center">
      <div className="relative w-full min-h-[90vh] rounded-2xl overflow-hidden mx-4 sm:mx-0">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Paisagem de montanha"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/70"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col justify-center items-center text-center mt-8">
          {/* Main content */}
          <div className="mb-10 sm:mb-16 max-w-4xl">
            <p className="text-lg sm:text-xl text-white/80 mb-2" style={{ fontFamily: design.fonts.body }}>
              Trabalhamos com os seus sonhos.
            </p>
            <h2
              className="text-7xl md:text-9xl font-light tracking-tighter text-white mt-2"
              style={{ fontFamily: design.fonts.title }}
            >
              Um parceiro nas suas viagens
            </h2>
            <div className="mt-6 space-y-3 text-base sm:text-lg text-white/90 max-w-md mx-auto px-4" style={{ fontFamily: design.fonts.body, lineHeight: '1.5' }}>
              <p>Ao gerir logística e segurança, o prazer de viajar volta a ser seu. Explore, descubra e crie memórias.</p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto w-full px-2 sm:px-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl py-6 px-4 sm:p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-normal text-white mb-1 sm:mb-2" style={{ fontFamily: design.fonts.title }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm" style={{ fontFamily: design.fonts.body }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
