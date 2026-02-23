import { FileText, Sparkles, SlidersHorizontal, CreditCard, Plane } from "lucide-react";
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
    <section className="py-24 md:py-32" id="how-it-works">
      <div className="container px-6">
        <h2 className="font-display text-3xl md:text-4xl italic text-center mb-3">
          {t("journey_title")}
        </h2>
        <p className="text-muted-foreground text-center mb-14">{t("journey_subtitle")}</p>

        <div className="max-w-2xl mx-auto space-y-10">
          {steps.map(({ num, icon: Icon, title, tag, desc }) => (
            <div key={num} className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full blue-gradient-box border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-display text-sm font-semibold">{num}</span>
              </div>
              <div className="flex items-start gap-3 pt-1">
                <Icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-lg">{title}</h3>
                  <p className="text-primary text-sm font-medium">{tag}</p>
                  <p className="text-muted-foreground text-sm mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
