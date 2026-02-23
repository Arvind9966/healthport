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
    <section className="py-24 md:py-32 blue-gradient-box">
      <div className="container px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-3">
          {t("feat_title")}<span className="text-primary">{t("feat_titleHighlight")}</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">{t("feat_subtitle")}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/70 border border-primary/10 rounded-2xl p-6 flex flex-col items-center gap-3 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
