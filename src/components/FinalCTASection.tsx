import { useLanguage } from "@/contexts/LanguageContext";
import ctaBgImage from "@/assets/final-cta-bg.jpg";
import BookingPopover from "@/components/BookingPopover";

const FinalCTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img src={ctaBgImage} alt="Paragliding tandem flight over green mountains near Medellín" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
          {t("Ready to Fly Over", "¿Listo Para Volar?")}
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          {t("Book your paragliding adventure today.", "Reserva tu aventura en parapente hoy.")}
        </p>
        <BookingPopover
          className="inline-flex btn-primary-gradient px-10 py-4 rounded-lg text-lg font-button font-semibold text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
        />
      </div>
    </section>
  );
};

export default FinalCTASection;
