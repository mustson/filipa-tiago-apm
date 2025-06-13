import { agentConfig, siteConfig, design } from "@/config";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone } from 'lucide-react';



const ContactSection = () => {
  const handleWhatsAppContact = () => {
    const message = `Olá ${agentConfig.firstName}, gostaria de planear a minha próxima viagem.`;
    const whatsappUrl = `https://wa.me/${agentConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailContact = () => {
    const subject = "Pedido de Informações de Viagem";
    const body = `Olá ${agentConfig.firstName},\n\nGostaria de obter mais informações sobre os vossos serviços de planeamento de viagens.\n\nCumprimentos,`;
    const mailtoUrl = `mailto:${agentConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className={`py-20 md:py-32 bg-${design.colors.background}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
            <p className="text-lg text-gray-600" style={{ fontFamily: design.fonts.body }}>Vamos começar a desenhar</p>
            <h2 
                className={`${design.headings.classes.h2} text-gray-900 mt-2`}
                style={{ fontFamily: design.fonts.title }}
            >
                {siteConfig.sections.contact.title}
            </h2>
            <p className={`text-lg text-${design.colors.textLight} mt-6 max-w-3xl mx-auto`} style={{ fontFamily: design.fonts.body }}>
                {siteConfig.sections.contact.description}
            </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Card */}
          <Card className={`bg-${design.colors.cardBackground} shadow-lg rounded-lg overflow-hidden`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-3 text-2xl font-normal text-${design.colors.text}`} style={{ fontFamily: design.fonts.title }}>
                <Phone className={`w-7 h-7 text-${design.colors.primary}`} />
                Conversa Rápida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-${design.colors.textLight} mb-6`} style={{ fontFamily: design.fonts.body }}>
                A forma mais rápida de obter respostas. Envie uma mensagem e vamos conversar sobre os seus planos.
              </p>
              <Button 
                onClick={handleWhatsAppContact} 
                className={`w-full ${design.buttons.whatsapp.bg} ${design.buttons.whatsapp.hover} ${design.buttons.whatsapp.textColor} font-normal py-3 text-base`}
                style={{ fontFamily: design.fonts.body }}
              >
                {design.buttons.whatsapp.text}
              </Button>
            </CardContent>
          </Card>

          {/* Email Card */}
          <Card className={`bg-${design.colors.cardBackground} shadow-lg rounded-lg overflow-hidden`}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-3 text-2xl font-normal text-${design.colors.text}`} style={{ fontFamily: design.fonts.title }}>
                <Mail className={`w-7 h-7 text-${design.colors.primary}`} />
                Pedido Detalhado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`text-${design.colors.textLight} mb-6`} style={{ fontFamily: design.fonts.body }}>
                Prefere detalhar as suas ideias por escrito? Envie um email e responderemos com todas as informações.
              </p>
              <Button 
                onClick={handleEmailContact} 
                className={`w-full ${design.buttons.secondary.bg} ${design.buttons.secondary.hover} ${design.buttons.secondary.textColor} font-normal py-3 text-base`}
                style={{ fontFamily: design.fonts.body }}
              >
                {design.buttons.secondary.text}
              </Button>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </section>
  );
};

export default ContactSection;
