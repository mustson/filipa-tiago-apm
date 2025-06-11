
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhyBrunoSection = () => {
  const reasons = [
    {
      title: "Experiência Personalizada",
      description: "Cada viagem é única e adaptada aos seus gostos e preferências pessoais.",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Destinos Exclusivos",
      description: "Acesso a locais únicos e experiências que não encontrará em mais lado nenhum.",
      icon: "🌍",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Suporte 24/7",
      description: "Apoio completo durante toda a sua viagem, para total tranquilidade.",
      icon: "🤝",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Preços Competitivos",
      description: "Melhor relação qualidade-preço com transparência total nos custos.",
      icon: "💎",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Parcerias Locais",
      description: "Rede de contactos locais para experiências autênticas e memoráveis.",
      icon: "🏛️",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Planeamento Detalhado",
      description: "Cada aspecto da sua viagem é cuidadosamente planeado e organizado.",
      icon: "📋",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Porquê Escolher</span>
            <br />
            <span className="gradient-text">Bruno Lopes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 10 anos de experiência criando viagens extraordinárias. 
            Descubra porque centenas de clientes confiam no Bruno para as suas aventuras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <CardTitle className="text-xl title-font text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrunoSection;
