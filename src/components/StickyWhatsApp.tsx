import { useLanguage } from "@/contexts/LanguageContext";
import BookingPopover from "@/components/BookingPopover";

interface StickyWhatsAppProps {
  isVisible?: boolean;
}

const StickyWhatsApp = ({ isVisible = true }: StickyWhatsAppProps) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Floating booking button - desktop & mobile */}
      <div className="fixed bottom-20 md:bottom-6 right-4 z-50">
        <BookingPopover
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float text-primary-foreground font-button font-bold text-xs"
          label="✈️"
        />
      </div>

      {/* Persistent mobile CTA bar */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <BookingPopover
            className="block w-full btn-primary-gradient py-4 text-center font-button font-semibold text-primary-foreground text-sm"
            label={t("✈️ I want to fly!", "✈️ ¡Quiero volar!")}
          />
        </div>
      )}
    </>
  );
};

export default StickyWhatsApp;
