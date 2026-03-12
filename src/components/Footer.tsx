import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8 px-4 text-center">
      <p className="font-display text-xl text-foreground mb-2">
        BELLO <span className="text-primary">PARAPENTE</span>
      </p>
      <p className="text-xs text-muted-foreground">
        © 2025 Bello Parapente. {t("All rights reserved.", "Todos los derechos reservados.")}
      </p>
    </footer>
  );
};

export default Footer;
