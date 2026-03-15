import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import WhyFlySection from "@/components/WhyFlySection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import InstagramSection from "@/components/InstagramSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyWhatsApp from "@/components/StickyWhatsApp";
// import InstagramModal from "@/components/InstagramModal";
import Footer from "@/components/Footer";
import { useSEO, useStructuredData } from "@/hooks/use-seo";

const Index = () => {
  const [showWhatsAppBanner, setShowWhatsAppBanner] = useState(false);
  // const [showInstagramModal, setShowInstagramModal] = useState(false);
  const socialProofRef = useRef<HTMLDivElement>(null);
  // const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  // const [timeSpent, setTimeSpent] = useState(0);
  // const startTimeRef = useRef(Date.now());

  // // Track time spent on page
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentTime = Date.now();
  //     const spent = Math.floor((currentTime - startTimeRef.current) / 1000);
  //     setTimeSpent(spent);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // // Track scroll depth
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const scrollPercentage = (scrolled + windowHeight) / documentHeight;
      
  //     if (scrollPercentage > 0.4) {
  //       setHasScrolledEnough(true);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // // Show Instagram modal logic
  // useEffect(() => {
  //   if (!showInstagramModal && hasScrolledEnough && timeSpent >= 45) {
  //     // Check if user has seen modal before (localStorage)
  //     const hasSeenModal = localStorage.getItem('instagram-modal-seen');
  //     if (!hasSeenModal) {
  //       setShowInstagramModal(true);
  //     }
  //   }
  // }, [hasScrolledEnough, timeSpent, showInstagramModal]);

  // // Intent to exit detection
  // useEffect(() => {
  //   let exitIntentShown = false;
    
  //   const handleMouseLeave = (e: MouseEvent) => {
  //     if (!exitIntentShown && e.clientY <= 0 && !showInstagramModal) {
  //       const hasSeenModal = localStorage.getItem('instagram-modal-seen');
  //       if (!hasSeenModal) {
  //         setShowInstagramModal(true);
  //         exitIntentShown = true;
  //       }
  //     }
  //   };

  //   document.addEventListener('mouseleave', handleMouseLeave);
  //   return () => document.removeEventListener('mouseleave', handleMouseLeave);
  // }, [showInstagramModal]);

  // const handleCloseInstagramModal = () => {
  //   setShowInstagramModal(false);
  //   localStorage.setItem('instagram-modal-seen', 'true');
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowWhatsAppBanner(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50% 0px',
      }
    );

    if (socialProofRef.current) {
      observer.observe(socialProofRef.current);
    }

    return () => {
      if (socialProofRef.current) {
        observer.unobserve(socialProofRef.current);
      }
    };
  }, []);

  // SEO Configuration
  useSEO({
    title: "Parapente en Medellín | Bello Parapente - Vuelos desde San Félix",
    description: "Bello Parapente ofrece vuelos en parapente sobre Medellín desde el famoso despegue de San Félix, uno de los mejores lugares para volar en Colombia. Disfruta vistas espectaculares desde $220.000 COP. Reserva tu aventura ahora.",
    keywords: "paragliding Medellin, paragliding San Felix, parapente Medellin, vuelos parapente, San Felix parapente, turismo aventura Medellin, parapente tandem Colombia",
    canonicalUrl: "https://belloparapente.com",
  });

  // Structured Data
  useStructuredData({
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "LocalBusiness"],
    "name": "Bello Parapente",
    "description": "Vuelos en parapente tándem sobre Medellín, Colombia. Experiencias únicas desde el despegue de San Félix con vistas espectaculares de la ciudad.",
    "url": "https://belloparapente.com",
    "image": "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c588455-6d57-4ca9-92ac-a7b40b22e8bc/id-preview-ce0f4048--ac08aee3-2a6b-4e12-81aa-9f988cdc9519.lovable.app-1773356703229.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Félix, Bello",
      "addressRegion": "Antioquia",
      "addressCountry": "CO",
      "postalCode": "051050"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.3373",
      "longitude": "-75.5550"
    },
    "priceRange": "$220.000 - $400.000 COP",
    "telephone": "+573203293577",
    "sameAs": [
      "https://instagram.com/belloparapente",
      "https://wa.me/573203293577"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "offers": {
      "@type": "Offer",
      "name": "Vuelo en Parapente Tándem",
      "priceCurrency": "COP",
      "lowPrice": "220000",
      "highPrice": "400000",
      "availability": "https://schema.org/InStock"
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div ref={socialProofRef}>
        <SocialProofSection />
      </div>
      <HowItWorksSection />
      <PricingSection />
      <WhyFlySection />
      <LocationSection />
      <InstagramSection />
      <FAQSection />
      <FinalCTASection />
      <StickyWhatsApp isVisible={showWhatsAppBanner} />
      {/* <InstagramModal 
        isVisible={showInstagramModal} 
        onClose={handleCloseInstagramModal} 
      /> */}
      <Footer />
    </div>
  );
};

export default Index;
