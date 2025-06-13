import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TravelPackages from '@/components/TravelPackages';
import AboutSection from '@/components/AboutSection';
// TravelDesigner component removed as requested
import WhyHugoSection from '@/components/WhyBrunoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TravelPackages />
      <WhyHugoSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
