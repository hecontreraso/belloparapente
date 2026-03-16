import { useLanguage } from "@/contexts/LanguageContext";
import { trackWhatsAppConversion } from "@/lib/tracking";
import heroImage from "@/assets/hero-paragliding.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  // WhatsApp URL dinámico según idioma
  const whatsappMessage = encodeURIComponent(
    t(
      "Hello! I want to book a paragliding flight over Medellín. Could you give me more information?",
      "¡Hola! Quiero reservar un vuelo en parapente sobre Medellín. ¿Podrían darme más información?"
    )
  );
  const WHATSAPP_URL = `https://wa.me/573203293577?text=${whatsappMessage}`;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Track conversion for Google Ads and Facebook Pixel
    trackWhatsAppConversion(WHATSAPP_URL);
  };

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Parapente Medellín - Vuelos en parapente sobre Medellín desde San Félix con Bello Parapente"
          className="w-full h-full object-cover md:object-center"
          style={{ objectPosition: '75% center' }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080} />
        
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-4">
          {t("Paragliding Over", "Vuela en Parapente Sobre")}
          <br />
          <span className="text-gradient">{t("Medellín", "Medellín")}</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-8 text-secondary-foreground">
          {t(
            "See the city from the sky. Flights from $220.000",
            "Mira Medellín desde el cielo. Vuelos desde $220.000"
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            data-noeventtrack="true"
            className="btn-primary-gradient px-8 py-4 rounded-lg text-lg font-body font-semibold text-primary-foreground text-center hover:opacity-90 transition-opacity">
            
            {t("Book on WhatsApp", "Reservar por WhatsApp")}
          </a>
          <a
            href="#flights"
            className="px-8 py-4 rounded-lg text-lg font-body font-semibold text-foreground border border-foreground/20 text-center hover:bg-foreground/10 transition-colors">
            
            {t("See Flight Options", "Ver Opciones de Vuelo")}
          </a>
        </div>
      </div>
    </section>);

};

export default HeroSection;