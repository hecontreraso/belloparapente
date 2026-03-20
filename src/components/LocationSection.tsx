import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
          {t("Where to Find Us", "Donde estamos")}
        </h2>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-5 h-5 text-primary" />
          <p>
            {t(
              "San Félix paragliding launch site near Medellín. Only 25 minutes from the city center.",
              "Despegue de parapente San Félix cerca de Medellín. A solo 40 minutos del centro de la ciudad.",
            )}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/50 aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3965.488156254077!2d-75.6018107!3d6.3307408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f481bbb6ed3%3A0xbcabf4ee6e211e65!2sBello%20parapente!5e0!3m2!1sen!2sco!4v1773422162810!5m2!1sen!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="San Félix launch site"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
