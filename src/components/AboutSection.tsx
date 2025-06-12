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
    <section id="about" className="h-screen bg-white px-0 sm:px-4 flex items-center justify-center">
      <div className="relative w-full h-[90vh] rounded-2xl overflow-hidden mx-4 sm:mx-0">
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
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col justify-center items-center text-center">
          {/* Main content */}
          <div className="mb-16 max-w-4xl">
            <h2 
              className="font-normal leading-tight tracking-tight mb-6"
              style={{ 
                fontFamily: design.headings.fontFamily,
                fontSize: design.headings.fontSize,
                lineHeight: design.headings.lineHeight,
                fontWeight: design.headings.fontWeight,
                letterSpacing: design.headings.letterSpacing,
                color: 'white'
              }}
            >
              Um parceiro <span className="text-orange-400">nas suas viagens</span>
            </h2>
            
            <div className="space-y-4 text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: design.fonts.body }}>
              <p>Trabalhamos com os seus sonhos, não em vez deles.</p>
              <p>Ao gerir logística e segurança, o prazer de viajar volta a ser seu.</p>
              <p>Explore, descubra e crie memórias.</p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: design.fonts.title }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm" style={{ fontFamily: design.fonts.body }}>
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
