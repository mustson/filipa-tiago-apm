
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Lisboa",
      text: "O Bruno organizou a nossa lua de mel em Santorini e foi simplesmente perfeito! Cada detalhe foi pensado ao pormenor. Recomendo vivamente!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "João Costa",
      location: "Porto",
      text: "Viagem incrível para a Tailândia! O Bruno conseguiu criar um itinerário que superou todas as nossas expectativas. Serviço de primeira qualidade.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ana Rodrigues",
      location: "Coimbra",
      text: "Experiência única em Marrocos! O Bruno tem contactos locais fantásticos que nos proporcionaram experiências autênticas que nunca esqueceremos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Pedro Santos",
      location: "Faro",
      text: "Viagem de sonho ao Japão! O Bruno cuidou de tudo, desde os voos até às experiências mais especiais. Profissionalismo exemplar!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Experiências</span>
            <br />
            <span className="gradient-text">Inesquecíveis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que dizem os nossos clientes sobre as suas viagens com o Bruno Lopes. 
            Cada testemunho é uma história de aventura e descoberta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-lg animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="title-font text-lg text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <div className="flex justify-center space-x-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-center italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
