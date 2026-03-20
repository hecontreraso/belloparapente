import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-paragliding.jpg";
import BookingPopover from "@/components/BookingPopover";
import { useIsMobile } from "@/hooks/use-mobile";
import { Loader2 } from "lucide-react";

const HERO_VIDEO_URL = "https://pub-b1e334eefc6c4d63a2190bc287e9fda4.r2.dev/hero-mobile.mp4";

const HeroSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative min-h-screen flex items-end pb-20 md:pb-32">
      <div className="absolute inset-0">
        {isMobile ? (
          <>
            {!videoReady && (
              <div className="absolute inset-0 z-[1] flex items-center justify-center bg-background">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            )}
            <video
              src={HERO_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              onPlaying={() => setVideoReady(true)}
              className="w-full h-full object-cover"
              style={{ objectPosition: '75% center' }}
            />
          </>
        ) : (
          <img
            src={heroImage}
            alt="Parapente Medellín - Vuelos en parapente sobre Medellín desde San Félix con Bello Parapente"
            className="w-full h-full object-cover md:object-center"
            style={{ objectPosition: '75% center' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
          />
        )}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none text-foreground mb-4">
          {t("THE ABSOLUTE BEST THING TO DO", "lA EXPERIENCIA MÁS INCREÍBLE")}
          <br />
          <span className="text-gradient">{t("IN MEDELLÍN", "EN Medellín")}</span>
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-8 text-secondary-foreground">
          {t(
            "Paragliding over the city from $220.000 (60 USD)",
            "Vuela en parapente desde $220.000"
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <BookingPopover
            className="btn-primary-gradient px-8 py-4 rounded-lg text-lg font-body font-semibold text-primary-foreground text-center hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
