import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8 px-4 text-center flex flex-col items-center gap-3">
      <img src={logo} alt="Bello Parapente" className="h-12 rounded" />
      <a
        href="https://instagram.com/belloparapente"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
      >
        <Instagram className="w-4 h-4" />
        @belloparapente
      </a>
      <p className="text-xs text-muted-foreground">
        © 2025 Bello Parapente. {t("All rights reserved.", "Todos los derechos reservados.")}
      </p>
    </footer>
  );
};

export default Footer;
