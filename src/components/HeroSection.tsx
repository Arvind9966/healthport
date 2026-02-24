import { ArrowRight, ExternalLink } from "lucide-react";
import heroBgVideo from "@/assets/hero-bg-video.mp4";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const badges = [t("hero_badge1"), t("hero_badge2"), t("hero_badge3"), t("hero_badge4")];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container px-4 sm:px-6 text-center relative z-10 py-20">
        <p className="text-white/90 text-base sm:text-lg mb-4 sm:mb-6 drop-shadow-md">{t("hero_subtitle")}</p>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-6 sm:mb-8 text-white drop-shadow-lg">
          {t("hero_title")}
          <span className="text-primary drop-shadow-lg">{t("hero_titleHighlight")}</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/80 mb-8 sm:mb-10 drop-shadow-md">
          {badges.map((item, i) => (
            <span key={i} className="flex items-center gap-2 sm:gap-4">
              {i > 0 && <span className="text-white/40">|</span>}
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            {t("hero_cta1")} <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-sm">
            {t("hero_cta2")} <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
