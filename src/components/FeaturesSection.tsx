import { Building2, Users, Stethoscope, Globe, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Building2, title: t("feat_accreditedHospitals"), desc: t("feat_accreditedHospitalsDesc") },
    { icon: Users, title: t("feat_expertSurgeons"), desc: t("feat_expertSurgeonsDesc") },
    { icon: Stethoscope, title: t("feat_specialties"), desc: t("feat_specialtiesDesc") },
    { icon: Globe, title: t("feat_countries"), desc: t("feat_countriesDesc") },
    { icon: Languages, title: t("feat_multilingual"), desc: t("feat_multilingualDesc") },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 blue-gradient-box">
      <div className="container px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3">
            {t("feat_title")}<span className="gradient-text">{t("feat_titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10 sm:mb-14 max-w-xl mx-auto">{t("feat_subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card/90 border border-primary/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2.5 sm:gap-3 backdrop-blur-sm hover-lift group"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-foreground leading-tight">{title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
