import { agentConfig, design } from "@/config";
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const TravelDesigner = () => {
  return (
    <section className={`bg-gray-100 py-24 sm:py-32`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        

        <div className="text-center">
          <p className="text-lg text-gray-600" style={{ fontFamily: design.fonts.body }}>A sua viagem, a nossa assinatura.</p>
          <h2 
            className={`${design.headings.classes.h2} text-gray-900 mt-2`}
            style={{ fontFamily: design.fonts.title }}
          >
            Travel Designer
          </h2>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <img 
                src="/branding/about.jpg"
                alt={`${agentConfig.fullName} - Travel Designer`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-4 text-left">
                <p className="text-sm text-gray-700" style={{ fontFamily: design.fonts.body }}>
                  Somos <span className="font-semibold">{agentConfig.fullName}</span>. O nosso trabalho é transformar o seu tempo numa experiência pessoal. Criamos viagens que refletem quem é, o que procura e o que precisa de sentir. Sem pacotes, sem stress. Apenas memórias que o marcam e encontros que fazem sentido.
                </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold mb-6" style={{ fontFamily: design.fonts.title, color: design.colors.text }}>
            Conhece-nos
            </h3>
            <div className="flex justify-center items-center gap-4">
                <a href={`https://instagram.com/${agentConfig.instagramHandle.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-700 rounded-full p-3 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                </a>
                <a href={`https://facebook.com${agentConfig.facebookHandle}`} target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-700 rounded-full p-3 transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                </a>
                <a href={`https://linkedin.com${agentConfig.linkedinHandle}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-100 hover:bg-yellow-200 text-yellow-600 hover:text-yellow-700 rounded-full p-3 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TravelDesigner;




