import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactForm = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32" id="contact-us">
      <div className="container px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-3">
          {t("contact_title")}<span className="text-primary">{t("contact_titleHighlight")}</span>
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">{t("contact_subtitle")}</p>

        <form className="max-w-2xl mx-auto bg-muted/50 rounded-2xl p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={t("contact_fullName")}
              className="bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <div className="relative">
              <input
                type="email"
                placeholder={t("contact_email")}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder={t("contact_phone")}
              className="bg-card border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <select className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>{t("contact_selectProcedure")}</option>
              <option>Dentistry</option>
              <option>Hair Transplantation</option>
              <option>Cosmetic Surgery</option>
              <option>Orthopedic Surgery</option>
              <option>IVF & Fertility</option>
              <option>Heart Care</option>
              <option>Neurology</option>
              <option>Eye/Lasik Care</option>
              <option>ENT</option>
            </select>
          </div>
          <textarea
            rows={4}
            placeholder={t("contact_condition")}
            className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            {t("contact_submit")} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
