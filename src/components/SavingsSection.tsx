import { ArrowRight, ExternalLink, Stethoscope } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SavingsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container px-4 sm:px-6">
        <div className="blue-gradient-box rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-12 border border-primary/10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-semibold tracking-widest text-xs sm:text-sm mb-4 uppercase">{t("sav_label")}</p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-primary mb-2">{t("sav_percent")}</h2>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-4 text-foreground uppercase tracking-wide">
              {t("sav_title")}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto md:mx-0">{t("sav_desc")}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                {t("sav_cta1")} <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-border px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                {t("sav_cta2")} <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-secondary/50 flex items-center justify-center">
            <Stethoscope className="w-12 h-12 sm:w-20 sm:h-20 text-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
