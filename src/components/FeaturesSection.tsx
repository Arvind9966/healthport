import { Building2, Users, Stethoscope, Globe, Languages } from "lucide-react";
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
    <section className="py-16 sm:py-24 md:py-32 blue-gradient-box">
      <div className="container px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3">
          {t("feat_title")}<span className="text-primary">{t("feat_titleHighlight")}</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-xl mx-auto">{t("feat_subtitle")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/70 border border-primary/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-3 backdrop-blur-sm">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-foreground">{title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
