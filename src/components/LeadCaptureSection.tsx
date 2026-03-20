import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Send } from "lucide-react";

const LeadCaptureSection = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3">
          {t("Get Flight Availability", "Consulta Disponibilidad")}
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">
          {t(
            "Not ready to book yet? Leave your info and we'll get back to you.",
            "¿Aún no estás listo? Déjanos tus datos y te contactamos."
          )}
        </p>

        {submitted ? (
          <div className="card-gradient border border-primary/30 rounded-xl p-8">
            <p className="text-foreground text-lg font-semibold">
              {t("Thank you! We'll contact you soon.", "¡Gracias! Te contactaremos pronto.")} ✈️
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-gradient border border-border/50 rounded-xl p-6 space-y-4">
            <input
              type="text"
              required
              maxLength={100}
              placeholder={t("Your name", "Tu nombre")}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <input
              type="email"
              required
              maxLength={255}
              placeholder={t("Your email", "Tu email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <button
              type="submit"
              className="w-full btn-primary-gradient py-3 rounded-lg font-button font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t("Send", "Enviar")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default LeadCaptureSection;
