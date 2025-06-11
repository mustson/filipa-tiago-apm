
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "934327708";
    const message = "Hi Bruno, I'd like to know more about your travel packages!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen hero-beach-bg noise-overlay flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-100 text-sm font-medium mb-6">
              ✈️ Premium Travel Experiences
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="text-white">Discover</span>
            <br />
            <span className="gradient-text">Extraordinary</span>
            <br />
            <span className="text-white">Adventures</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're bringing adaptive intelligence to where wanderlust meets luxury. 
            Curated experiences that transform your journey into unforgettable memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppContact}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
