import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { X, Instagram } from "lucide-react";

interface InstagramModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const InstagramModal = ({ isVisible, onClose }: InstagramModalProps) => {
  const { t } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Wait for animation to complete
  };

  const handleInstagramClick = () => {
    // Track Facebook Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
    window.open('https://instagram.com/belloparapente', '_blank', 'noopener noreferrer');
    handleClose();
  };

  if (!isVisible && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-6 text-center">
          {/* Instagram icon */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#405DE6] via-[#E1306C] to-[#FFDC80] flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {t("🎁 Special Gift!", "🎁 ¡Regalo Especial!")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg font-semibold text-primary mb-4">
            {t("+5 Minutes Extra Flight", "+5 Minutos Extra de Vuelo")}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t(
              "Follow us on Instagram to see epic flight videos and receive 5 extra minutes on your paragliding adventure!",
              "¡Síguenos en Instagram para ver videos épicos de vuelos y recibe 5 minutos extra en tu aventura de parapente!"
            )}
          </p>

          {/* CTA Button */}
          <button
            onClick={handleInstagramClick}
            className="w-full bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mb-4"
          >
            <div className="flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              {t("Follow @belloparapente", "Seguir @belloparapente")}
            </div>
          </button>

          {/* Fine print */}
          <p className="text-xs text-gray-500">
            {t(
              "Show this offer when booking your flight",
              "Muestra esta oferta al reservar tu vuelo"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramModal;