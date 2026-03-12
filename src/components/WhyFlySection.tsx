import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Eye, Users, Heart, Video } from "lucide-react";

const WhyFlySection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Shield, text: t("Certified experienced pilots", "Pilotos certificados y experimentados") },
    { icon: Shield, text: t("Safety equipment included", "Equipo de seguridad incluido") },
    { icon: Eye, text: t("Incredible views of Medellín", "Vistas increíbles de Medellín") },
    { icon: Heart, text: t("Thousands of happy flyers", "Miles de pasajeros felices") },
    { icon: Video, text: t("Optional video of your flight", "Video opcional del vuelo") },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
          {t("Why Fly With Us", "¿Por Qué Volar Con Nosotros?")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex items-center gap-3 card-gradient p-4 rounded-lg border border-border/50">
              <r.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium text-left">{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFlySection;
