import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WhyBrunoSection = () => {
  const reasons = [
    {
      title: "Experiência Exclusiva",
      description: "Cada viagem é desenhada à sua medida, refletindo os seus desejos e aspirações pessoais.",
      icon: "✨",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Destinos Únicos",
      description: "Acesso privilegiado a locais extraordinários e momentos verdadeiramente singulares.",
      icon: "🌏",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Acompanhamento Premium",
      description: "Assistência personalizada 24/7 durante toda a sua jornada, garantindo tranquilidade absoluta.",
      icon: "👑",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Excelência em Valor",
      description: "Experiências extraordinárias com transparência total e valor incomparável.",
      icon: "💎",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Conexões Privilegiadas",
      description: "Rede exclusiva de parceiros locais para momentos autênticos e memoráveis.",
      icon: "🤝",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Atenção ao Detalhe",
      description: "Cada momento da sua viagem é meticulosamente planeado e orquestrado à perfeição.",
      icon: "🎯",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Porquê Viajar com</span>
            <br />
            <span className="gradient-text">Bruno Lopes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Mais de uma década de excelência a criar experiências extraordinárias.
            Descubra porque centenas de viajantes confiam no Bruno para as suas aventuras mais especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 rounded-2xl transform hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${reason.gradient} text-white mb-4`}>
                  {reason.icon}
                </div>
                <CardTitle className="text-xl font-light">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
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
