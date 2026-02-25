import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const ZeroFeesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative blue-gradient-box rounded-3xl p-8 sm:p-12 md:p-20 text-center border border-primary/10 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              {t("zero_title")}<span className="gradient-text">{t("zero_titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">{t("zero_desc")}</p>
            <button className="bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] active:scale-[0.98]">
              {t("zero_cta")} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZeroFeesSection;
