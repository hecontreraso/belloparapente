import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t("Is paragliding safe?", "¿Es seguro volar en parapente?"),
      a: t(
        "Yes! All our pilots are certified with thousands of flights. We use professional-grade equipment that is regularly inspected and maintained.",
        "¡Sí! Todos nuestros pilotos están certificados con miles de vuelos. Usamos equipo profesional que se inspecciona y mantiene regularmente."
      ),
    },
    {
      q: t("Do I need experience?", "¿Necesito experiencia?"),
      a: t(
        "No experience needed! You fly tandem with a certified pilot who handles everything. You just enjoy the ride.",
        "¡No necesitas experiencia! Vuelas en tándem con un piloto certificado que se encarga de todo. Tú solo disfruta."
      ),
    },
    {
      q: t("What should I wear?", "¿Qué debo llevar?"),
      a: t(
        "Comfortable clothes and closed-toe shoes. We recommend sunglasses and sunscreen. Bring a jacket as it can be cooler at altitude.",
        "Ropa cómoda y zapatos cerrados. Recomendamos gafas de sol y protector solar. Trae una chaqueta ya que puede hacer frío en altitud."
      ),
    },
    {
      q: t("How long does the experience take?", "¿Cuánto dura la experiencia?"),
      a: t(
        "Plan for about 2-3 hours total including transport, briefing, flight, and landing. The actual flight time depends on the package you choose.",
        "Planea unas 2-3 horas en total incluyendo transporte, instrucciones, vuelo y aterrizaje. El tiempo de vuelo depende del paquete que elijas."
      ),
    },
    {
      q: t("Can I bring my phone or camera?", "¿Puedo llevar mi teléfono o cámara?"),
      a: t(
        "Yes, but we recommend securing it with a strap. We also offer GoPro video recording so you can fully enjoy the experience.",
        "Sí, pero recomendamos asegurarlo con una correa. También ofrecemos grabación con GoPro para que disfrutes al máximo."
      ),
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-12">
          {t("Frequently Asked Questions", "Preguntas Frecuentes")}
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="card-gradient border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
