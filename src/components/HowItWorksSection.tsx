import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Users, Eye } from "lucide-react";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MapPin,
      title: t("Book via WhatsApp", "Reserva por WhatsApp"),
      desc: t("Just give us your name and phone number", "Basta con darnos tu nombre y celular"),
    },
    {
      icon: Users,
      title: t("We pick you up", "Te recogemos en tu casa"),
      desc: t("(Optional) or you can get there on your own", "(Opcional) o si deseas puedes llegar por tu cuenta"),
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
          {t("How Paragliding Medellín Works", "Cómo Funciona el Parapente Medellín")}
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
