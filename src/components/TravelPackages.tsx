import { agentConfig, design, siteConfig } from "@/config";
import travelPackages from "@/data/travelPackages.json";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { CheckCircle, MapPin, MessageCircle } from 'lucide-react';

// Define a type for a package for stronger type safety
interface Price {
  value: number;
  currency: string;
  type: string;
}

interface Package {
  id: string;
  name: string;
  image: string;
  price: Price;
  duration: string;
  description: string;
  includes: string[];
  availableDates: string[];
}

const TravelPackages = () => {
  const handleWhatsAppContact = (packageName: string) => {
    const message = `Olá ${agentConfig.firstName}, gostaria de saber mais sobre o pacote "${packageName}".`;
    const whatsappUrl = `https://wa.me/${agentConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="packages" className={`py-20 md:py-32 bg-${design.colors.background}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <p className="text-lg text-gray-600" style={{ fontFamily: design.fonts.body }}>Explore as nossas coleções</p>
            <h2 
                className={`${design.headings.classes.h2} text-gray-900 mt-2`}
                style={{ fontFamily: design.fonts.title }}
            >
                {siteConfig.sections.packages.title}
            </h2>
            <p className={`text-lg text-${design.colors.textLight} mt-6 max-w-3xl mx-auto`} style={{ fontFamily: design.fonts.body }}>
                {siteConfig.sections.packages.description}
            </p>
        </div>

        <Tabs defaultValue={travelPackages.categories[0].id} className="w-full">
          <div className="relative w-full mb-10 overflow-hidden">
            <TabsList className="flex justify-between overflow-x-auto whitespace-nowrap pb-2 bg-transparent rounded-none border-0 shadow-none scrollbar-hide touch-pan-x">
              {travelPackages.categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="text-slate-400 data-[state=active]:text-slate-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-cyan-700 py-3 px-4 sm:px-6 font-medium transition-all flex-shrink-0 flex-grow text-center min-w-[100px]"
                  style={{ fontFamily: design.fonts.body }}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {travelPackages.categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.packages.map((pkg: Package) => {
                  return (
                    <Card key={pkg.id} className={`bg-${design.colors.cardBackground} rounded-2xl overflow-hidden shadow-lg border-0 hover:shadow-xl transition-all duration-300 flex flex-col`}>
                      <CardHeader className="p-0">
                        <div className="relative">
                          <img 
                            src={pkg.image} 
                            alt={pkg.name} 
                            className="w-full h-56 object-cover" 
                          />
                          <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                            {pkg.duration}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 flex-grow">
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin className={`w-4 h-4 text-${design.colors.primary} mt-1 flex-shrink-0`} />
                          <div>
                            <CardTitle className={`text-xl font-bold text-${design.colors.text} leading-tight`} style={{ fontFamily: design.fonts.title }}>
                              {pkg.name}
                            </CardTitle>
                            <p className={`text-sm text-${design.colors.textLight} mt-1`} style={{ fontFamily: design.fonts.body }}>{pkg.duration}</p>
                          </div>
                        </div>
                        
                        <p className={`text-${design.colors.textLight} mb-4 text-sm leading-relaxed line-clamp-2`} style={{ fontFamily: design.fonts.body }}>
                          {pkg.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          {pkg.includes.slice(0, 2).map((item, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className={`w-4 h-4 text-${design.colors.primary} mr-2 mt-0.5 flex-shrink-0`} />
                              <span className={`text-${design.colors.text} text-sm`} style={{ fontFamily: design.fonts.body }}>{item}</span>
                            </div>
                          ))}
                          {pkg.includes.length > 2 && (
                            <div className="flex items-start mt-2">
                              <MessageCircle className={`w-4 h-4 text-${design.colors.highlight} mr-2 mt-0.5 flex-shrink-0`} />
                              <span className={`text-${design.colors.highlight} text-sm font-normal`} style={{ fontFamily: design.fonts.body }}>mais detalhes via WhatsApp</span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="p-6">
                        <div className="flex justify-between items-center w-full">
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-light" style={{ fontFamily: design.fonts.body, color: design.colors.textLight }}>{pkg.price.type}</span>
                            <span className="text-3xl font-medium" style={{ fontFamily: design.fonts.title, color: design.colors.text }}>
                              {pkg.price.currency}{pkg.price.value}
                            </span>
                          </div>
                          <Button 
                            onClick={() => handleWhatsAppContact(pkg.name)}
                            className={`${design.buttons.primary.bg} ${design.buttons.primary.hover} ${design.buttons.primary.textColor} font-normal py-3 px-5 rounded-lg text-sm shadow-lg hover:shadow-cyan-700/30 transition-all duration-300`}
                            style={{ fontFamily: design.fonts.body }}
                          >
                            {design.buttons.primary.text}
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TravelPackages;
