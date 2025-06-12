import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TravelPackages from '@/components/TravelPackages';
import AboutSection from '@/components/AboutSection';
import TravelDesigner from '@/components/TravelDesigner';
import WhyHugoSection from '@/components/WhyBrunoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TravelPackages />
      <WhyHugoSection />
      <TestimonialsSection />
      <TravelDesigner />
      <ContactSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
