import { useLanguage } from "@/contexts/LanguageContext";
import { Clock, Video, Car } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/573001234567?text=";

const PricingSection = () => {
  const { t, lang } = useLanguage();

  const flights = [
    { duration: "15 min", priceCOP: "$220.000", priceUSD: "~$60 USD", popular: false },
    { duration: "20 min", priceCOP: "$290.000", priceUSD: "~$80 USD", popular: true },
    { duration: "30 min", priceCOP: "$440.000", priceUSD: "~$120 USD", popular: false },
  ];

  return (
    <section id="flights" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
          {t("Flight Options", "Opciones de Vuelo")}
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          {t("Choose your adventure", "Elige tu aventura")}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {flights.map((flight, i) => (
            <div
              key={i}
              className={`relative card-gradient rounded-xl border p-6 flex flex-col items-center text-center ${
                flight.popular ? "border-primary ring-1 ring-primary" : "border-border/50"
              }`}
            >
              {flight.popular && (
                <span className="absolute -top-3 btn-primary-gradient px-4 py-1 rounded-full text-xs font-bold text-primary-foreground">
                  {t("MOST POPULAR", "MÁS POPULAR")}
                </span>
              )}
              <Clock className="w-8 h-8 text-primary mb-4 mt-2" />
              <h3 className="font-display text-3xl text-foreground mb-1">{flight.duration}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("Tandem Flight", "Vuelo Tándem")}</p>
              <div className="mb-6">
                <p className="text-2xl font-bold text-foreground">{flight.priceCOP} {t("COP", "")}</p>
                {lang === "en" && <p className="text-sm text-muted-foreground">{flight.priceUSD}</p>}
              </div>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(t(`Hi! I want to book a ${flight.duration} paragliding flight`, `¡Hola! Quiero reservar un vuelo de ${flight.duration}`))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary-gradient py-3 rounded-lg font-button font-semibold text-primary-foreground hover:opacity-90 transition-opacity text-center"
              >
                {t("Book on WhatsApp", "Reservar por WhatsApp")}
              </a>
            </div>
          ))}
        </div>

        <div className="card-gradient rounded-xl border border-border/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-primary" />
            <div>
              <p className="text-foreground font-semibold">{t("GoPro Flight Video", "Video GoPro del Vuelo")}</p>
              <p className="text-sm text-muted-foreground">{t("Optional add-on", "Complemento opcional")}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-foreground">$50.000 {t("COP", "")}</span>
            {lang === "en" && <p className="text-sm text-muted-foreground">~$14 USD</p>}
          </div>
        </div>

        <div className="card-gradient rounded-xl border border-border/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Car className="w-6 h-6 text-primary" />
            <div>
              <p className="text-foreground font-semibold">{t("Round-trip Transportation", "Transporte ida y vuelta")}</p>
              <p className="text-sm text-muted-foreground">{t("From anywhere in the metropolitan area", "Desde cualquier parte del área metropolitana")}</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-foreground">$140.000 {t("COP", "")}</span>
            {lang === "en" && <p className="text-sm text-muted-foreground">~$38 USD</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
