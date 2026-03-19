import { useLanguage } from "@/contexts/LanguageContext";

const StatsBar = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "+15", label: t("Years of experience", "Años de experiencia") },
    { value: "+3000", label: t("Successful flights", "Vuelos realizados con éxito") },
    { value: "5.0 ★", label: t("Rating on Google", "Calificación en Google") },
  ];

  return (
    <section className="w-full bg-primary py-5 md:py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl md:text-5xl text-primary-foreground leading-none">
                {stat.value}
              </p>
              <p className="text-sm md:text-base font-medium text-primary-foreground/90 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
