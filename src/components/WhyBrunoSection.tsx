import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { agentConfig, design } from '@/config';
import { Globe, ShieldCheck, Star, Users, Map, Coffee } from 'lucide-react';

const WhyHugoSection = () => {
  const reasons = [
    {
      title: "Paixão que Gera Resultados",
      description: `Com mais de 10 anos de experiência, não vendo apenas viagens, eu crio o roteiro dos seus sonhos. A minha paixão é a sua garantia de uma experiência inesquecível.`,
      icon: Star
    },
    {
      title: "Curadoria de Especialista",
      description: `Esqueça os destinos genéricos. Eu ofereço acesso a lugares e experiências que só um verdadeiro conhecedor pode proporcionar, longe das multidões.`,
      icon: Globe
    },
    {
      title: "Transparência e Confiança",
      description: `O seu investimento é tratado com o máximo respeito. Ofereço total clareza nos custos, sem taxas escondidas ou surpresas desagradáveis.`,
      icon: ShieldCheck
    },
    {
      title: "Roteiros 100% Personalizados",
      description: `Não trabalho com pacotes prontos. Cada detalhe da sua viagem é pensado para atender aos seus interesses, ritmo e estilo.`,
      icon: Map
    },
    {
      title: "Parceiros de Confiança",
      description: `A minha rede de contatos globais garante que você terá o melhor serviço, seja no hotel, no restaurante ou no transporte.`,
      icon: Users
    },
    {
      title: "Suporte Real, a Qualquer Hora",
      description: `Eu estou pessoalmente disponível para garantir que a sua viagem seja perfeita. Sem robôs ou intermediários, apenas um especialista dedicado a si.`,
      icon: Coffee
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-7xl mx-auto px-3 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            className={`${design.headings.classes.h2} text-gray-900 mb-6`}
            style={{ fontFamily: design.fonts.title }}
          >
            Por que viajar com o {agentConfig.firstName}?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: design.fonts.body }}>
            A diferença entre uma boa viagem e uma viagem memorável está na experiência e na dedicação de quem a planeja. Veja como a minha abordagem transforma viagens em sonhos realizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-2xl transition-all duration-300 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-cyan-700 text-white mb-4">
                  <reason.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900" style={{ fontFamily: design.fonts.title }}>{reason.title}</CardTitle>
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
