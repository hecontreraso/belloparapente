import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-paragliding.jpg";

const WHATSAPP_URL = "https://wa.me/573001234567?text=Hello%20I%20want%20to%20book%20a%20paragliding%20flight";

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Fly over Medellín" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          {t("Ready to Fly Over", "¿Listo Para Volar Sobre")}
          <br />
          <span className="text-gradient">{t("Medellín?", "Medellín?")}</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          {t("Book your paragliding adventure today.", "Reserva tu aventura en parapente hoy.")}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex btn-primary-gradient px-10 py-4 rounded-lg text-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
        >
          {t("Message us on WhatsApp", "Escríbenos por WhatsApp")}
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
