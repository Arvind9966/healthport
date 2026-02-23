import { Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

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

  return (
    <section className="py-24 md:py-32">
      <div className="container px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl italic mb-3">{t("price_title")}</h2>
        <p className="text-muted-foreground mb-12">{t("price_subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative blue-gradient-box border rounded-2xl p-8 text-left flex flex-col ${
                plan.highlight ? "border-primary shadow-lg" : "border-primary/10"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-xl mb-1">{plan.name}</h3>
              {plan.priceLabel && <p className="text-xs text-muted-foreground">{plan.priceLabel}</p>}
              <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>

              <div className="flex-1 space-y-3 mb-8">
                {plan.included.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
                {plan.excluded.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-opacity ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {t("price_bookNow")}
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8">{t("price_note")}</p>
      </div>
    </section>
  );
};

export default PricingSection;
