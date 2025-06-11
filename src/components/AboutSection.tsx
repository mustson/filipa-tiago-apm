const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-3">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Coluna de Texto */}
            <div className="animate-fade-in text-left lg:order-1">
                <h2 className="text-5xl md:text-6xl title-font mb-8">
                    <span className="text-gray-900">Bruno trabalha com </span>
                    <br />
                    <span className="text-blue-500">os seus sonhos, </span>
                    <br />
                    <span className="text-gray-900">não em vez deles.</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Ao gerir <span className="text-orange-500 font-semibold">logística complexa</span>, 
                    melhorar a <span className="text-purple-600 font-semibold">segurança da viagem</span>, 
                    e aprender com <span className="text-orange-500 font-semibold">cada jornada</span>, 
                    Bruno ajuda os viajantes a focar no que fazem melhor: 
                    <span className="text-purple-600 font-semibold"> explorar, descobrir e criar memórias.</span>
                </p>

                <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-lg text-gray-700">Planeamento personalizado de itinerários</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-lg text-gray-700">Suporte de viagem 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-lg text-gray-700">Experiências locais exclusivas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-lg text-gray-700">Opções de reserva flexíveis</span>
                    </div>
                </div>

                <div className="flex">
                    <a
                        href="#packages"
                        className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                    >
                        Ver Pacotes de Viagem
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="animate-fade-in">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-in-out">
                    <img
                        src="https://images.unsplash.com/photo-1533810019453-7351dbd31aee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Viajantes felizes numa paisagem montanhosa"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
