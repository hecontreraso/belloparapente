import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Users, Eye } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MapPin,
      title: t("Arrive at San Félix", "Llega a San Félix"),
      desc: t("Arrive at the launch site in San Félix", "Llega al despegue en San Félix"),
    },
    {
      icon: Users,
      title: t("Fly Tandem", "Vuela en Tándem"),
      desc: t("Fly with a certified pilot", "Vuela con piloto certificado"),
    },
    {
      icon: Eye,
      title: t("Enjoy the Views", "Disfruta las Vistas"),
      desc: t("Enjoy incredible views of Medellín", "Disfruta vistas increíbles de Medellín"),
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
          {t("How It Works", "Cómo Funciona")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full btn-primary-gradient flex items-center justify-center mb-4">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary mb-2">{t(`Step ${i + 1}`, `Paso ${i + 1}`)}</span>
              <h3 className="font-display text-2xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
