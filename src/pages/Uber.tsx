import { useLanguage } from "@/contexts/LanguageContext";
import { trackWhatsAppConversion } from "@/lib/tracking";
import logo from "@/assets/logo.jpg";

const VIDEO_EN = "https://pub-b1e334eefc6c4d63a2190bc287e9fda4.r2.dev/720-english.MOV";
const VIDEO_ES = "https://pub-b1e334eefc6c4d63a2190bc287e9fda4.r2.dev/720-spanish.MOV";

const Uber = () => {
  const { lang, setLang, t } = useLanguage();

  const videoUrl = lang === "en" ? VIDEO_EN : VIDEO_ES;

  const whatsappMessage = encodeURIComponent(
    t(
      "Hello! I saw your ad and want to book a paragliding flight over Medellín!",
      "¡Hola! Vi su anuncio y quiero reservar un vuelo en parapente sobre Medellín!"
    )
  );
  const WHATSAPP_URL = `https://wa.me/573203293577?text=${whatsappMessage}`;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackWhatsAppConversion(WHATSAPP_URL);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Minimal header */}
      <header className="flex items-center justify-between px-4 py-3">
        <a href="/">
          <img src={logo} alt="Bello Parapente" className="h-10 rounded" />
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="px-3 py-1.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          {lang === "en" ? "ESP" : "ENG"}
        </button>
      </header>

      {/* Video section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-28">
        <div className="w-full max-w-lg mx-auto">
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-black">
            <video
              key={videoUrl}
              className="w-full aspect-[9/16] object-cover"
              controls
              autoPlay
              muted
              playsInline
              preload="auto"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>

          {/* CTA below video */}
          <div className="mt-6 text-center space-y-4">
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              {t("Fly Over", "Vuela Sobre")}
              {" "}
              <span className="text-gradient">Medellín</span>
            </h1>
            <p className="text-secondary-foreground text-base md:text-lg">
              {t(
                "Paragliding flights from $220.000 COP",
                "Vuelos en parapente desde $220.000 COP"
              )}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              data-noeventtrack="true"
              className="inline-block w-full btn-primary-gradient px-8 py-4 rounded-lg text-lg font-button font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t("Book on WhatsApp", "Reservar por WhatsApp")}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Uber;
