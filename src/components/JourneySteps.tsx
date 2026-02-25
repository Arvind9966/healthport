import { FileText, Sparkles, SlidersHorizontal, CreditCard, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const JourneySteps = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", icon: FileText, title: t("journey_step1_title"), tag: t("journey_step1_tag"), desc: t("journey_step1_desc") },
    { num: "02", icon: Sparkles, title: t("journey_step2_title"), tag: t("journey_step2_tag"), desc: t("journey_step2_desc") },
    { num: "03", icon: SlidersHorizontal, title: t("journey_step3_title"), tag: t("journey_step3_tag"), desc: t("journey_step3_desc") },
    { num: "04", icon: CreditCard, title: t("journey_step4_title"), tag: t("journey_step4_tag"), desc: t("journey_step4_desc") },
    { num: "05", icon: Plane, title: t("journey_step5_title"), tag: t("journey_step5_tag"), desc: t("journey_step5_desc") },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 blue-gradient-box" id="how-it-works">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic mb-3">
            {t("journey_title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10 sm:mb-14">{t("journey_subtitle")}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map(({ num, icon: Icon, title, tag, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 sm:gap-5 relative pb-8 sm:pb-10 last:pb-0"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-5 sm:left-7 top-12 sm:top-14 w-px h-[calc(100%-2.5rem)] bg-primary/15" />
              )}

              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="text-primary font-display text-xs sm:text-sm font-bold">{num}</span>
              </div>
              <div className="flex-1 pt-0.5 sm:pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <h3 className="font-display text-base sm:text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-primary text-xs sm:text-sm font-medium mb-1">{tag}</p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
