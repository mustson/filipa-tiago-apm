
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl title-font mb-8">
              <span className="text-gray-900">Bruno trabalha com os seus</span>
              <br />
              <span className="gradient-text">sonhos, não</span>
              <br />
              <span className="text-gray-900">em vez deles.</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ao gerir <span className="text-orange-500 font-semibold">logística complexa</span>, 
              melhorar a <span className="text-purple-600 font-semibold">segurança da viagem</span>, 
              e aprender com <span className="text-orange-500 font-semibold">cada jornada</span>, 
              Bruno ajuda os viajantes a focar no que fazem melhor: 
              <span className="text-purple-600 font-semibold"> explorar, descobrir e criar memórias.</span>
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Planeamento personalizado de itinerários</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Suporte de viagem 24/7</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Experiências locais exclusivas</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Opções de reserva flexíveis</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="gradient-orange-purple noise-overlay rounded-3xl p-8 text-white">
                <h3 className="text-2xl title-font mb-4">Os Detalhes</h3>
                <p className="text-white/90">Planeamento de viagem de precisão encontra inteligência adaptativa</p>
              </div>
              
              <div className="gradient-blue-purple noise-overlay rounded-3xl p-8 text-white">
                <h3 className="text-2xl title-font mb-4">Veja por si mesmo</h3>
                <p className="text-white/90">Experimente a diferença em primeira mão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
