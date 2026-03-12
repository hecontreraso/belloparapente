import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
          {t("Location", "Ubicación")}
        </h2>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-5 h-5 text-primary" />
          <p>
            {t(
              "San Félix launch site near Medellín. Only 25 minutes from the city.",
              "Despegue en San Félix cerca de Medellín. A solo 25 minutos de la ciudad."
            )}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border/50 aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d-75.5449!3d6.3386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sBello+Parapente!5e0!3m2!1sen!2sco!4v1"
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
