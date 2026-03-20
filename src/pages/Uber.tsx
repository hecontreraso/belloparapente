import { useLanguage } from "@/contexts/LanguageContext";
import { trackWhatsAppConversion } from "@/lib/tracking";
import { Instagram } from "lucide-react";
import { useRef } from "react";
import logo from "@/assets/logo.jpg";

const VIDEO_EN = "https://pub-b1e334eefc6c4d63a2190bc287e9fda4.r2.dev/720-eng.MOV";
const VIDEO_ES = "https://pub-b1e334eefc6c4d63a2190bc287e9fda4.r2.dev/720-esp.MOV";

const Uber = () => {
  const { lang, setLang, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  

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

      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-28">
        <div className="w-full max-w-lg mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-black">
            <video
              ref={videoRef}
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
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = !videoRef.current.muted;
                  setIsMuted(!isMuted);
                }
              }}
              className={`absolute top-3 right-3 z-10 flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isMuted
                  ? "bg-primary text-primary-foreground animate-pulse shadow-lg shadow-primary/40"
                  : "bg-black/60 hover:bg-black/80 text-white"
              }`}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              {isMuted && (
                <span className="text-sm font-button font-semibold whitespace-nowrap">
                  {t("🔊 Turn sound on", "🔊 Activa el sonido")}
                </span>
              )}
            </button>
          </div>

          <div className="mt-6 text-center space-y-4">
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              {t("Paraglide Over", "Vuela en Parapente Sobre")}
              {" "}
              <span className="text-gradient">Medellín</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                data-noeventtrack="true"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] px-6 py-4 rounded-lg text-lg font-button font-semibold text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>
                {t("Book on WhatsApp", "Reserva por WhatsApp")}
              </a>
              <a
                href="https://instagram.com/belloparapente"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-90 px-6 py-4 rounded-lg text-lg font-button font-semibold text-white transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                {t("Book on IG", "Reserva por IG")}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Uber;
