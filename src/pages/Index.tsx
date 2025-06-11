
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TravelPackages from '@/components/TravelPackages';
import AboutSection from '@/components/AboutSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TravelPackages />
      <AboutSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
