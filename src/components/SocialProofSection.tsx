import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import reviewKlevin from "@/assets/review-klevin.png";
import reviewSantiago from "@/assets/review-santiago.png";
import reviewElkin from "@/assets/review-elkin.png";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/kpmbRz4sqPV1cZhV7";

const SocialProofSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Klevin Cifuentes",
      photo: reviewKlevin,
      rating: 5,
      text: t(
        "The best experience you can have in northern Bello paragliding. The mountains and the view of the city are incredible and beautiful. And pilot Duvan, an excellent person and very professional in his work. I recommend it 💯 out of 💯👍🏼",
        "La mejor experiencia que se puede vivir al norte de bello en parapente sus montañas y su vista hacia la ciudad son increíbles y hermosas y del piloto Duvan ni decir exactamente persona y muy profesional en su trabajo lo recomiendo 💯 de 💯👍🏼"
      ),
      time: t("a year ago", "hace un año"),
      link: "https://maps.app.goo.gl/Xp2qsrhEFCFhzJAD9",
    },
    {
      name: "Santiago Jimenez",
      photo: reviewSantiago,
      rating: 5,
      text: t(
        "The views of the city are brutal and the flight is very calm. The team was very professional and the whole process was smooth. Highly recommended if you're looking to do something different.",
        "Las vistas de la ciudad son brutales y el vuelo es muy tranquilo. El equipo fue muy profesional y todo el proceso fue fluido. Muy recomendado si buscas hacer algo diferente."
      ),
      time: t("a year ago", "hace un año"),
      link: "https://maps.app.goo.gl/CQBAwqDqFhUuphTu5",
    },
    {
      name: "Elkin Lopez",
      photo: reviewElkin,
      rating: 5,
      text: t(
        "If you want a great experience with great professionals from this region, this is the place.",
        "Si quiere una muy buena experiencia junto a grandes profesionales de esta región, es aquí."
      ),
      time: t("6 months ago", "hace 6 meses"),
      link: "https://maps.app.goo.gl/cDXpfkCvpPRvwtQY6",
    },
    {
      name: "Anderson Stiven Buitrago Martinez",
      photo: null,
      initial: "A",
      color: "bg-blue-600",
      rating: 5,
      text: t(
        "Flying is spectacular, the people are super professional and make you feel safe. 100% recommended.",
        "El volar es espectacular, la gente es súper profesional y te hacen sentir Seguros. 100% recomendado."
      ),
      time: t("3 months ago", "hace 3 meses"),
      link: "https://maps.app.goo.gl/PpBp4BfuXKX7Kg337",
    },
    {
      name: "Paola Rippe",
      photo: null,
      initial: "P",
      color: "bg-rose-600",
      rating: 5,
      text: t(
        "It was a wonderful experience, I felt free seeing so much greatness and very safe with the equipment and instructors. At first I was scared but then it was incredible... Indescribable",
        "Fue una experiencia maravillosa, me sentí libre al ver tanta grandeza y muy segura con los equipos y con los instructores, en principio si me dio miedo pero luego fue increíble... Indescriptible"
      ),
      time: t("2 months ago", "hace 2 meses"),
      link: "https://maps.app.goo.gl/QbQdCboykwzAFVFV9",
    },
    {
      name: "Jhon Stiven Ibarra",
      photo: null,
      initial: "J",
      color: "bg-teal-600",
      rating: 5,
      text: t(
        "I looked at several options and without a doubt I found the best one because I had an excellent experience.",
        "Busque varias opciones y sin duda di con la mejor porque tuve una excelente experiencia"
      ),
      time: t("a month ago", "hace un mes"),
      link: "https://maps.app.goo.gl/ELumzHxZHzzUDeup8",
    },
    {
      name: "Daniela Puerta Lopez",
      photo: null,
      initial: "D",
      color: "bg-purple-600",
      rating: 5,
      text: t(
        "Flying paragliding was an incredible and exciting experience. I felt very safe and enjoyed every moment of the flight. I would definitely do it again. I totally recommend Bello Parapente! 🪂",
        "Volar en parapente fue una experiencia increíble y llena de emoción. Me sentí muy segura y disfruté cada momento del vuelo.\n\nSin duda lo volvería a hacer. ¡Recomiendo totalmente a Bello Parapente! 🪂"
      ),
      time: t("a month ago", "hace un mes"),
      link: "https://maps.app.goo.gl/aDSHoJoV2rjCVyVZ9",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviews.length - visibleCount;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Reset index when visibleCount changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic social proof */}
        <div className="flex items-center justify-center gap-2 mb-6 text-primary font-medium">
          <span className="text-lg">🔥</span>
          <span className="text-sm md:text-base">
            {t("37 people booked a flight this week", "37 personas reservaron un vuelo esta semana")}
          </span>
        </div>

        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
          {t("One of the Best Experiences", "Una de las Mejores Experiencias")}
          <br />
          <span className="text-gradient">{t("in Medellín", "en Medellín")}</span>
        </h2>

        {/* Google Reviews Section */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left: Google rating summary */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 card-gradient p-6 rounded-xl border border-border/50 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors w-full md:w-auto"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwep6OELXxBnZrteAXhaRjM9sCisKqUwe2a0vVtMn0d2wXOm1GJICVcQNPMYKVVLxMs1HbK0YG5Z_kBYXf_Im3rY9PXPARfdve2taNsDD7FH-Phy5pJ9Yswu0_hqxttEAWGl9xC1NbUdYB71S=w92-h92-p-k-no"
                alt="Bello Parapente"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-foreground text-lg">Bello Parapente</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-primary">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              {t("Based on Google reviews", "Basado en reseñas de Google")}
            </span>
            <span className="text-xs text-muted-foreground/70">
              powered by <span className="font-semibold text-foreground">Google</span>
            </span>
            <div className="mt-2 bg-[#4285F4] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#3367D6] transition-colors">
              {t("Rate us on", "Valóranos en")}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
          </a>

          {/* Right: Review carousel */}
          <div className="flex-1 min-w-0 relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {reviews.map((review, i) => (
                  <a
                    key={i}
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="card-gradient p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {review.photo ? (
                            <img src={review.photo} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                          ) : (
                            <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm`}>
                              {review.initial}
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-foreground text-sm">{review.name}</p>
                            <p className="text-xs text-muted-foreground">{review.time}</p>
                          </div>
                        </div>
                        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </div>
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(review.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground text-sm leading-relaxed">{review.text}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-9 h-9 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-9 h-9 rounded-full bg-background/90 border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i > maxIndex ? maxIndex : i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
