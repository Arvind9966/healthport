import { ArrowRight, ExternalLink, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const SavingsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative blue-gradient-box rounded-3xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 sm:gap-12 border border-primary/10 overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />

          <div className="flex-1 text-center md:text-left relative z-10">
            <p className="text-primary font-semibold tracking-widest text-xs sm:text-sm mb-4 uppercase">{t("sav_label")}</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl gradient-text mb-2 font-bold">{t("sav_percent")}</h2>
            <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-4 text-foreground uppercase tracking-wide">
              {t("sav_title")}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">{t("sav_desc")}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]">
                {t("sav_cta1")} <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-border px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                {t("sav_cta2")} <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 text-primary/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsSection;
