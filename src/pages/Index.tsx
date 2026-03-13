import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import WhyFlySection from "@/components/WhyFlySection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";

import FinalCTASection from "@/components/FinalCTASection";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <PricingSection />
      <WhyFlySection />
      <LocationSection />
      <GallerySection />
      <FAQSection />
      
      <FinalCTASection />
      <StickyWhatsApp />
      <Footer />
    </div>
  );
};

export default Index;
