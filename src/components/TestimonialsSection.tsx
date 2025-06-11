
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "O Bruno transformou completamente a nossa lua de mel, criando momentos mágicos enquanto cuidava de todos os detalhes. A atenção personalizada foi extraordinária.",
      author: "Sofia Almeida",
      role: "Cliente, Viagem a Paris",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      text: "Implementar os serviços do Bruno nas nossas férias familiares reduziu o stress em 40% enquanto melhorava a qualidade da experiência. As capacidades de adaptação são notáveis.",
      author: "Miguel Rodrigues",
      role: "Diretor de Turismo, Família Silva",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      text: "O Bruno adaptou-se aos nossos protocolos de viagem mais rapidamente que qualquer agente que já usámos. É como ter outro consultor que nunca se cansa e mantém precisão perfeita.",
      author: "Dr. Ana Patinho",
      role: "Especialista Sénior, Viagens Corporativas",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      id: 4,
      text: "Como empresa de médio porte, nunca pensámos que serviços de viagem avançados fossem acessíveis. O Bruno mudou completamente essa equação com versatilidade e facilidade de implementação.",
      author: "João Santos",
      role: "CEO, Soluções Inovadoras Lda.",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-600 text-sm font-medium mb-6">
            Testemunhos
          </div>
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">O que</span>
            <br />
            <span className="gradient-text">outros dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative p-8 rounded-3xl text-white overflow-hidden group animate-scale-in bg-gradient-to-br ${testimonial.gradient} noise-overlay`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative z-10">
                <blockquote className="text-lg mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div>
                  <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-white/80 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
