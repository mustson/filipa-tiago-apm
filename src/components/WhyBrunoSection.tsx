
const WhyBrunoSection = () => {
  const features = [
    {
      id: 1,
      title: "Aprendizagem Adaptativa",
      description: "Bruno aprende com as suas interações, melhorando continuamente as suas respostas e ações para servir melhor as suas necessidades.",
      icon: "🧠",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Interação Natural",
      description: "Comunique usando linguagem natural e gestos. Bruno compreende o contexto e responde adequadamente.",
      icon: "💬",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Movimento Preciso",
      description: "Articulações motorizadas avançadas proporcionam movimento fluido, semelhante ao humano, com equilíbrio e coordenação excepcionais.",
      icon: "⚡",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Consciência Espacial",
      description: "Sensores avançados e tecnologia de mapeamento permitem ao Bruno navegar em ambientes complexos com facilidade.",
      icon: "🗺️",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Segurança Aprimorada",
      description: "Protocolos integrados protegem os seus dados e privacidade, enquanto salvaguardas físicas garantem operação segura.",
      icon: "🔒",
      gradient: "from-red-500 to-orange-600"
    },
    {
      id: 6,
      title: "Assistência de Tarefas",
      description: "De lembretes simples a tarefas complexas de múltiplas etapas, Bruno pode ajudar com uma ampla gama de atividades.",
      icon: "📋",
      gradient: "from-teal-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-600 text-sm font-medium mb-6">
            Características
          </div>
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Inteligência Avançada,</span>
            <br />
            <span className="gradient-text">Intuição Humana</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construído com tecnologia de ponta para compreender, aprender e adaptar-se às suas necessidades únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative p-8 rounded-3xl text-white overflow-hidden group animate-scale-in bg-gradient-to-br ${feature.gradient} noise-overlay hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl title-font mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrunoSection;
