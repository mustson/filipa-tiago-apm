import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "934327708";
    const message = `Olá Bruno,

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Planear a Sua</span>
            <br />
            <span className="text-blue-500">Próxima Aventura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contacto connosco para criar a viagem dos seus sonhos. 
            O Bruno está pronto para personalizar cada detalhe da sua experiência de viagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl title-font text-gray-900 mb-6">Como Contactar</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-blue-100 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">WhatsApp</h3>
                  <p className="text-gray-600 font-medium">+351 934 327 708</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-100 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                  <p className="text-gray-600 font-medium">bruno@viagens.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-green-100 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Horário</h3>
                  <p className="text-gray-600 font-medium">Seg - Sex: 9:00 - 18:00</p>
                </div>
              </div>

              <a href="https://www.instagram.com/brunolopestravel" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Instagram</h3>
                      <p className="text-gray-600 font-medium">@brunolopestravel</p>
                  </div>
                </div>
              </a>

              <a href="https://www.facebook.com/brunolopestravel" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 p-4 bg-blue-100 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Facebook</h3>
                      <p className="text-gray-600 font-medium">/brunolopestravel</p>
                  </div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/bruno-lopes-a55a35b/" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4 p-4 bg-sky-100 rounded-lg">
                  <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h3 className="font-semibold text-gray-900 text-lg">LinkedIn</h3>
                      <p className="text-gray-600 font-medium">Bruno Lopes</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <h3 className="text-2xl title-font text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  placeholder="O seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  placeholder="o.seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                  placeholder="+351 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white"
                  placeholder="Conte-nos sobre a sua viagem ideal..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Enviar via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
