import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WHATSAPP_URL = "https://wa.me/573203293577?text=Hello%20I%20want%20to%20book%20a%20paragliding%20flight";
const INSTAGRAM_URL = "https://instagram.com/belloparapente";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

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
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
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
