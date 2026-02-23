import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Essential Care",
    price: "FREE",
    badge: "Most Popular",
    included: ["Treatment at partner hospital", "Doctor consultations & diagnostic workup"],
    excluded: ["Dedicated care coordinator", "Premium accommodation & transfers", "Full concierge & VIP experience"],
    highlight: true,
  },
  {
    name: "Comfort Plan",
    priceLabel: "Starting at",
    price: "$1,200",
    included: [
      "Treatment + recovery stay included",
      "Premium accommodation & transfers",
      "Doctor consultations & diagnostic workup",
      "Full concierge & VIP experience",
    ],
    excluded: ["Dedicated care coordinator"],
    highlight: false,
  },
  {
    name: "Premium Package",
    priceLabel: "Starting at",
    price: "$1,500",
    included: [
      "Treatment + flights included",
      "Dedicated care coordinator",
      "Premium accommodation & transfers",
      "Full concierge & VIP experience",
      "Post-treatment recovery suite & follow-ups",
    ],
    excluded: [],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl italic mb-3">Flexible Plans for Every Patient</h2>
        <p className="text-muted-foreground mb-12">Pick the level of support that fits your needs and budget.</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-2xl p-8 text-left flex flex-col ${
                plan.highlight ? "border-primary shadow-lg" : "border-border"
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
                Book Now
              </button>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Note: Hospital treatment fees are billed directly at the hospital's standard rates — no markups from HealthPort.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
