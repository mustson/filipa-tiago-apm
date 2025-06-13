import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { agentConfig, design } from '@/config';
import { Globe, ShieldCheck, Star, Users, Map, Coffee } from 'lucide-react';

const WhyHugoSection = () => {
  const reasons = [
    {
      title: "Paixão que Gera Resultados",
      description: `Com mais de 10 anos de experiência, não vendemos apenas viagens, nós criamos o roteiro dos seus sonhos. A nossa paixão é a sua garantia de uma experiência inesquecível.`,
      icon: Star
    },
    {
      title: "Curadoria de Especialista",
      description: `Esqueça os destinos genéricos. Nós oferecemos acesso a lugares e experiências que só verdadeiros conhecedores podem proporcionar, longe das multidões.`,
      icon: Globe
    },
    {
      title: "Transparência e Confiança",
      description: `O seu investimento é tratado com o máximo respeito. Oferecemos total clareza nos custos, sem taxas escondidas ou surpresas desagradáveis.`,
      icon: ShieldCheck
    },
    {
      title: "Roteiros 100% Personalizados",
      description: `Não trabalhamos com pacotes prontos. Cada detalhe da sua viagem é pensado para atender aos seus interesses, ritmo e estilo.`,
      icon: Map
    },
    {
      title: "Parceiros de Confiança",
      description: `A nossa rede de contatos globais garante que você terá o melhor serviço, seja no hotel, no restaurante ou no transporte.`,
      icon: Users
    },
    {
      title: "Suporte Real, a Qualquer Hora",
      description: `Estamos pessoalmente disponíveis para garantir que a sua viagem seja perfeita. Sem robôs ou intermediários, apenas especialistas dedicados a si.`,
      icon: Coffee
    }
  ];

  return (
    <section className="pt-24 pb-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-7xl mx-auto px-3 pb-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            className={`${design.headings.classes.h2} text-gray-900 mb-6`}
            style={{ fontFamily: design.fonts.title }}
          >
            Por que viajar com {agentConfig.fullName}?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: design.fonts.body }}>
            A diferença entre uma boa viagem e uma viagem memorável está na experiência e na dedicação de quem a planeja. Veja como a nossa abordagem transforma viagens em sonhos realizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border border-gray-100/80 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-200/80 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl text-white mb-4 ${index % 3 === 0 ? 'bg-red-600' : index % 3 === 1 ? 'bg-blue-600' : 'bg-yellow-500'}`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900" style={{ fontFamily: design.fonts.title }}>  
                  <span className={`${index % 3 === 0 ? 'text-red-600' : index % 3 === 1 ? 'text-blue-600' : 'text-yellow-600'} mr-1`}>•</span> 
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed" style={{ fontFamily: design.fonts.body }}>
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

export default WhyHugoSection;
