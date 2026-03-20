import { useLanguage } from "@/contexts/LanguageContext";
import BookingPopover from "@/components/BookingPopover";

interface StickyWhatsAppProps {
  isVisible?: boolean;
}

const StickyWhatsApp = ({ isVisible = true }: StickyWhatsAppProps) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <BookingPopover
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float text-white font-button font-bold text-xs"
        label={
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 6.75C4 5.7835 4.7835 5 5.75 5H18.25C19.2165 5 20 5.7835 20 6.75V15.25C20 16.2165 19.2165 17 18.25 17H8.5L4.8 20.05C4.4735 20.319 4 20.0867 4 19.6638V6.75Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10H16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M8 13H13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        }
      />
    </div>
  );
};

export default StickyWhatsApp;
