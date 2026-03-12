import { useLanguage } from "@/contexts/LanguageContext";
import hero from "@/assets/hero-paragliding.jpg";
import reaction1 from "@/assets/passenger-reaction-1.jpg";
import reaction2 from "@/assets/passenger-reaction-2.jpg";
import takeoff from "@/assets/takeoff.jpg";
import aerial from "@/assets/medellin-aerial.jpg";
import sky from "@/assets/paraglider-sky.jpg";

const GallerySection = () => {
  const { t } = useLanguage();

  const images = [
    { src: hero, alt: "Paragliding over Medellín" },
    { src: reaction1, alt: "Happy passenger" },
    { src: takeoff, alt: "Takeoff moment" },
    { src: aerial, alt: "Aerial view of Medellín" },
    { src: reaction2, alt: "Happy couple" },
    { src: sky, alt: "Paraglider in the sky" },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-12">
          {t("Gallery", "Galería")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
