import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { agentConfig } from '@/config';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import travelData from '@/data/travelPackages.json';

const TravelPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('europa');

  const handleWhatsAppContact = (packageName: string) => {
    const phoneNumber = "934327708";
      const message = `Olá ${agentConfig.firstName}, preciso de informações sobre o seu pacote de férias ${packageName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl title-font mb-6">
            <span className="text-gray-900">Pacotes de Destinos Únicos e</span>
            <br />
            <span className="gradient-text">Personalizáveis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada viagem é única e inesquecível, descubra o mundo com a ajuda de um agente de viagens ou travel Designer.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-14 bg-white rounded-2xl p-2">
            {travelData.categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-lg font-semibold rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white transition-all duration-300"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {travelData.categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.packages.map((pkg, index) => (
                  <Card 
                    key={pkg.id} 
                    className="overflow-hidden group transition-all duration-500 transform hover:-translate-y-2 animate-scale-in border-0"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <Badge className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
                        {pkg.duration}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl title-font text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {pkg.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-2xl title-font text-blue-600">
                        {pkg.price}
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Inclui:</h4>
                        <ul className="space-y-1">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Datas Disponíveis:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pkg.availableDates.slice(0, 2).map((date, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {date}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-light"
                        onClick={() => handleWhatsAppContact(pkg.name)}
                      >
                        Saber mais via WhatsApp
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TravelPackages;
