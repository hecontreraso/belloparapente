import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, ExternalLink, Play } from "lucide-react";
import { trackInstagramConversion } from "@/lib/tracking";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";

const thumbnails = [
  { src: insta1, alt: "Vista desde parapente", url: "https://www.instagram.com/p/C0kwN3lOrtv/", hasPlay: true },
  { src: insta2, alt: "Piloto y pasajera en vuelo", url: "https://www.instagram.com/p/CyOmaTTx9hF/", hasPlay: false },
  { src: insta3, alt: "Pasajera disfrutando el vuelo", url: "https://www.instagram.com/p/C4HJEmNJ9Ym/", hasPlay: true },
];

const INSTAGRAM_URL = "https://instagram.com/belloparapente";

const InstagramSection = () => {
  const { t } = useLanguage();

  const handleInstagramClick = (e: React.MouseEvent, url: string = INSTAGRAM_URL) => {
    e.preventDefault();
    // Track conversion for Google Ads and Facebook Pixel
    trackInstagramConversion(url);
  };

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
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
          {thumbnails.map((thumb, i) => (
            <a
              key={i}
              href={thumb.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleInstagramClick(e, thumb.url)}
              className="relative aspect-[9/16] overflow-hidden rounded-xl group"
            >
              <img
                src={thumb.src}
                alt={thumb.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                {thumb.hasPlay && (
                  <Play className="w-10 h-10 text-white opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="white" />
                )}
                <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 right-2 drop-shadow-lg" />
              </div>
            </a>
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => handleInstagramClick(e, INSTAGRAM_URL)}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-button font-semibold text-lg bg-gradient-to-r from-[hsl(330,80%,55%)] via-[hsl(10,85%,55%)] to-[hsl(40,95%,55%)] hover:opacity-90 transition-opacity shadow-lg"
        >
          <Instagram className="w-5 h-5" />
          @belloparapente
          <ExternalLink className="w-4 h-4 opacity-70" />
        </a>

        <p className="text-xs text-muted-foreground mt-4">
          {t("Join 1200+ followers", "Únete a 1200+ seguidores")}
        </p>
      </div>
    </section>
  );
};

export default InstagramSection;
