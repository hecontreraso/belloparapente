import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8 px-4 text-center flex flex-col items-center">
      <img src={logo} alt="Bello Parapente" className="h-12 rounded mb-2" />
      <p className="text-xs text-muted-foreground">
        © 2025 Bello Parapente. {t("All rights reserved.", "Todos los derechos reservados.")}
      </p>
    </footer>
  );
};

export default Footer;
