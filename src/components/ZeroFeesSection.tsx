import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ZeroFeesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        <div className="blue-gradient-box rounded-3xl p-12 md:p-16 text-center border border-primary/10">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            {t("zero_title")}<span className="text-primary">{t("zero_titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">{t("zero_desc")}</p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            {t("zero_cta")} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZeroFeesSection;
