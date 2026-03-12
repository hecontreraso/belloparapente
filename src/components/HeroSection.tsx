import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-paragliding.jpg";

const WHATSAPP_URL = "https://wa.me/573001234567?text=Hello%20I%20want%20to%20book%20a%20paragliding%20flight";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Paragliding over Medellín"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-4">
          {t("Paragliding Over", "Vuela en Parapente Sobre")}
          <br />
          <span className="text-gradient">{t("Medellín", "Medellín")}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
          {t(
            "See the city from the sky. Flights from $220.000 COP.",
            "Mira Medellín desde el cielo. Vuelos desde $220.000 COP."
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient px-8 py-4 rounded-lg text-lg font-body font-semibold text-primary-foreground text-center hover:opacity-90 transition-opacity"
          >
            {t("Book on WhatsApp", "Reservar por WhatsApp")}
          </a>
          <a
            href="#flights"
            className="px-8 py-4 rounded-lg text-lg font-body font-semibold text-foreground border border-foreground/20 text-center hover:bg-foreground/10 transition-colors"
          >
            {t("See Flight Options", "Ver Opciones de Vuelo")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
