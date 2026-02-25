import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import useEmblaCarousel from "embla-carousel-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PricingSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [emblaRef] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const plans = [
    {
      name: t("price_essential"),
      price: t("price_free"),
      badge: t("price_mostPopular"),
      included: [t("price_essential_1"), t("price_essential_2")],
      excluded: [t("price_dedicatedCoordinator"), t("price_premiumAccommodation"), t("price_conciergeVIP")],
      highlight: true,
    },
    {
      name: t("price_comfort"),
      priceLabel: t("price_startingAt"),
      price: "$1,200",
      included: [t("price_comfort_1"), t("price_comfort_2"), t("price_comfort_3"), t("price_comfort_4")],
      excluded: [t("price_dedicatedCoordinator")],
      highlight: false,
    },
    {
      name: t("price_premium"),
      priceLabel: t("price_startingAt"),
      price: "$1,500",
      included: [t("price_premium_1"), t("price_premium_2"), t("price_premium_3"), t("price_premium_4"), t("price_premium_5")],
      excluded: [],
      highlight: false,
    },
  ];

  const PlanCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative blue-gradient-box border rounded-2xl p-5 sm:p-6 md:p-8 text-left flex flex-col h-full hover-lift ${
        plan.highlight ? "border-primary shadow-lg ring-1 ring-primary/20" : "border-primary/10"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow-md shadow-primary/20">
          {plan.badge}
        </span>
      )}
      <h3 className="font-display text-lg sm:text-xl mb-1">{plan.name}</h3>
      {plan.priceLabel && <p className="text-xs text-muted-foreground">{plan.priceLabel}</p>}
      <p className="text-2xl sm:text-3xl font-bold text-primary mb-6">{plan.price}</p>

      <div className="flex-1 space-y-3 mb-8">
        {plan.included.map((item) => (
          <div key={item} className="flex items-start gap-2.5 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span>{item}</span>
          </div>
        ))}
        {plan.excluded.map((item) => (
          <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
              <X className="w-3 h-3" />
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 rounded-xl font-medium transition-all active:scale-[0.98] ${
          plan.highlight
            ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
            : "border border-border hover:bg-muted"
        }`}
      >
        {t("price_bookNow")}
      </button>
    </motion.div>
  );

  return (
    <section className="py-16 sm:py-20 md:py-28">
      <div className="container px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl italic mb-3">{t("price_title")}</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-10 sm:mb-14">{t("price_subtitle")}</p>
        </motion.div>

        {isMobile ? (
          <div className="overflow-hidden -mx-5" ref={emblaRef}>
            <div className="flex gap-4 px-5">
              {plans.map((plan, i) => (
                <div key={plan.name} className="flex-[0_0_82%] min-w-0 pt-4">
                  <PlanCard plan={plan} index={i} />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">← Swipe to see more →</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-8">{t("price_note")}</p>
      </div>
    </section>
  );
};

export default PricingSection;
