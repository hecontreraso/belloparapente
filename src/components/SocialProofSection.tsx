import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";
import reaction1 from "@/assets/passenger-reaction-1.jpg";
import reaction2 from "@/assets/passenger-reaction-2.jpg";
import paragliderSky from "@/assets/paraglider-sky.jpg";

const SocialProofSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t("Absolutely incredible experience!", "¡Una experiencia increíble!"),
      name: t("Sarah K.", "Sarah K."),
      origin: t("New York, USA", "Nueva York, EE.UU."),
    },
    {
      text: t("Best thing we did in Medellín.", "Lo mejor que hicimos en Medellín."),
      name: t("Carlos M.", "Carlos M."),
      origin: t("Madrid, Spain", "Madrid, España"),
    },
    {
      text: t("Amazing pilots and unforgettable views.", "Pilotos profesionales y vistas increíbles."),
      name: t("Emma L.", "Emma L."),
      origin: t("London, UK", "Londres, UK"),
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic social proof */}
        <div className="flex items-center justify-center gap-2 mb-6 text-primary font-medium">
          <span className="text-lg">🔥</span>
          <span className="text-sm md:text-base">
            {t("37 people booked a flight this week", "37 personas reservaron un vuelo esta semana")}
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
          {t("One of the Best Experiences", "Una de las Mejores Experiencias")}
          <br />
          <span className="text-gradient">{t("in Medellín", "en Medellín")}</span>
        </h2>

        <div className="flex items-center justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-muted-foreground text-sm">
            {t("4.9 / 5 from hundreds of flyers", "4.9 / 5 de cientos de pasajeros")}
          </span>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          <img src={reaction1} alt="Happy passenger" className="w-full h-48 md:h-64 object-cover rounded-lg" />
          <img src={paragliderSky} alt="Paraglider in sky" className="w-full h-48 md:h-64 object-cover rounded-lg" />
          <img src={reaction2} alt="Happy couple after flight" className="w-full h-48 md:h-64 object-cover rounded-lg col-span-2 md:col-span-1" />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((review, i) => (
            <div key={i} className="card-gradient p-6 rounded-xl border border-border/50">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{review.text}"</p>
              <p className="text-sm text-muted-foreground">{review.name} — {review.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
