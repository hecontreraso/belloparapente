import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, ExternalLink, Play } from "lucide-react";
import heroImage from "@/assets/hero-paragliding.jpg";
import takeoff from "@/assets/takeoff.jpg";
import aerialView from "@/assets/medellin-aerial.jpg";
import reaction1 from "@/assets/passenger-reaction-1.jpg";
import reaction2 from "@/assets/passenger-reaction-2.jpg";
import paragliderSky from "@/assets/paraglider-sky.jpg";

const INSTAGRAM_URL = "https://instagram.com/belloparapente";

const thumbnails = [
  { src: heroImage, alt: "Vuelo en parapente", hasPlay: true },
  { src: reaction1, alt: "Reacción de pasajero", hasPlay: false },
  { src: aerialView, alt: "Vista aérea de Medellín", hasPlay: true },
  { src: takeoff, alt: "Despegue", hasPlay: false },
  { src: paragliderSky, alt: "Parapente en el cielo", hasPlay: true },
  { src: reaction2, alt: "Reacción de pasajero", hasPlay: false },
];

const InstagramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(330,80%,55%)] via-[hsl(30,90%,55%)] to-[hsl(50,95%,55%)] mb-6">
          <Instagram className="w-8 h-8 text-white" />
        </div>

        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3">
          {t("See Our Latest Flights", "Mira Nuestros Últimos Vuelos")}
        </h2>
        <p className="text-muted-foreground mb-2 text-sm md:text-base max-w-xl mx-auto">
          {t(
            "Follow us on Instagram to see flight videos, breathtaking views of Medellín from the sky, and reactions from our passengers.",
            "Síguenos en Instagram para ver videos de vuelos, vistas impresionantes de Medellín desde el cielo y reacciones de nuestros pasajeros."
          )}
        </p>
        <p className="text-primary font-semibold text-sm mb-8">
          {t("New flight videos every week!", "Nuevos videos de vuelos cada semana")}{" "}<span>🎥</span>
        </p>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-8">
          {thumbnails.map((thumb, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {thumb.hasPlay && (
                  <Play className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="white" />
                )}
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

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
