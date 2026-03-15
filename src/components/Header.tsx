import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const INSTAGRAM_URL = "https://instagram.com/belloparapente";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  // WhatsApp URL dinámico según idioma
  const whatsappMessage = encodeURIComponent(
    t(
      "Hello! I want to book a paragliding flight over Medellín. Could you give me more information?",
      "¡Hola! Quiero reservar un vuelo en parapente sobre Medellín. ¿Podrían darme más información?"
    )
  );
  const WHATSAPP_URL = `https://wa.me/573203293577?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    // Track Facebook Pixel Contact event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-background/80 backdrop-blur-md border-b border-border/50">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Bello Parapente" className="h-10 md:h-12 rounded" />
      </a>

      <div className="flex items-center gap-3 md:gap-5">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="Instagram"
        >
          <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
            <Instagram className="w-4 h-4 text-white" />
          </div>
        </a>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="px-3 py-1.5 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          {lang === "en" ? "ESP" : "ENG"}
        </button>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-gradient px-5 py-2.5 rounded-lg text-sm font-button font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          {t("Book Now", "Reservar")}
        </a>
      </div>
    </header>
  );
};

export default Header;
