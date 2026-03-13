import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, ExternalLink } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/belloparapente";

const InstagramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(330,80%,55%)] via-[hsl(30,90%,55%)] to-[hsl(50,95%,55%)] mb-6">
          <Instagram className="w-8 h-8 text-white" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3">
          {t("See Our Latest Flights", "Mira Nuestros Últimos Vuelos")}
        </h2>
        <p className="text-muted-foreground mb-2 text-sm md:text-base max-w-xl mx-auto">
          {t(
            "Follow us on Instagram to see daily flight videos, breathtaking views of Medellín from the sky, and real reactions from our passengers.",
            "Síguenos en Instagram para ver videos diarios de vuelos, vistas impresionantes de Medellín desde el cielo y reacciones reales de nuestros pasajeros."
          )}
        </p>
        <p className="text-primary font-semibold text-sm mb-8">
          🎥 {t("New flight videos every week!", "¡Nuevos videos de vuelos cada semana!")}
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-button font-semibold text-lg bg-gradient-to-r from-[hsl(330,80%,55%)] via-[hsl(10,85%,55%)] to-[hsl(40,95%,55%)] hover:opacity-90 transition-opacity shadow-lg"
        >
          <Instagram className="w-5 h-5" />
          @belloparapente
          <ExternalLink className="w-4 h-4 opacity-70" />
        </a>

        <p className="text-xs text-muted-foreground mt-4">
          {t("Join 500+ followers", "Únete a 500+ seguidores")}
        </p>
      </div>
    </section>
  );
};

export default InstagramSection;
