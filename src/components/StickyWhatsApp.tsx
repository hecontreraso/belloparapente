import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573001234567?text=Hello%20I%20want%20to%20book%20a%20paragliding%20flight";

const StickyWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Floating WhatsApp button - desktop & mobile */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>

      {/* Persistent mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full btn-primary-gradient py-4 text-center font-button font-semibold text-primary-foreground text-sm"
        >
          {t("📲 Book your flight on WhatsApp", "📲 Reserva tu vuelo por WhatsApp")}
        </a>
      </div>
    </>
  );
};

export default StickyWhatsApp;
