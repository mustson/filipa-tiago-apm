import { MapPin, Clock, Gem, BookOpenCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533810019453-7351dbd31aee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Paisagem montanhosa ao pôr do sol"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto bg-gray-900/60 backdrop-blur-lg rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16">
        
        {/* Section Header (Consistent with other sections) */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl title-font mb-6 text-white">
            Uma parceria <span className="text-blue-400">nas suas viagens</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Trabalhamos com os seus sonhos, não em vez deles.<br />
            Ao gerir logística e segurança, o prazer de viajar volta a ser seu. <br />
            Explore, descubra e crie memórias.
          </p>
        </div>

        {/* Benefits Grid inside a card */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            
            {/* Benefício 1 */}
            <div className="flex items-start space-x-4 text-white">
              <MapPin className="w-7 h-7 flex-shrink-0 text-blue-400" />
              <div>
                <h3 className="font-semibold text-white">Itinerários Personalizados</h3>
                <p className="text-white/70 text-sm mt-1">Viagens desenhadas à sua medida.</p>
              </div>
            </div>
            
            {/* Benefício 2 */}
            <div className="flex items-start space-x-4 text-white">
              <Clock className="w-7 h-7 flex-shrink-0 text-blue-400" />
              <div>
                <h3 className="font-semibold text-white">Suporte 24/7</h3>
                <p className="text-white/70 text-sm mt-1">Assistência durante a sua viagem.</p>
              </div>
            </div>

            {/* Benefício 3 */}
            <div className="flex items-start space-x-4 text-white">
              <Gem className="w-7 h-7 flex-shrink-0 text-blue-400" />
              <div>
                <h3 className="font-semibold text-white">Experiências Exclusivas</h3>
                <p className="text-white/70 text-sm mt-1">Acesso a locais e atividades únicas.</p>
              </div>
            </div>

            {/* Benefício 4 */}
            <div className="flex items-start space-x-4 text-white">
              <BookOpenCheck className="w-7 h-7 flex-shrink-0 text-blue-400" />
              <div>
                <h3 className="font-semibold text-white">Reservas Flexíveis</h3>
                <p className="text-white/70 text-sm mt-1">Opções que se adaptam aos seus planos.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
