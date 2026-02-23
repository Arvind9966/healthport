import { FileText, Sparkles, SlidersHorizontal, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Share Your Medical Reports",
    tag: "Quick & Confidential",
    desc: "Upload your scans or reports — we'll review and respond within 24 hours.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "Get a Personalized Treatment Plan",
    tag: "Matched to Your Needs",
    desc: "Our medical team recommends the best hospitals, doctors, and cost options.",
  },
  {
    num: "03",
    icon: SlidersHorizontal,
    title: "Choose Your Experience Level",
    tag: "Tailored Comfort",
    desc: "Pick your accommodation, meal preferences, and any wellness add-ons.",
  },
  {
    num: "04",
    icon: CreditCard,
    title: "Confirm & Book Securely",
    tag: "Transparent Billing",
    desc: "Pay only for travel and packages — hospital fees are billed directly to you.",
  },
  {
    num: "05",
    icon: Plane,
    title: "Arrive, Heal & Recover",
    tag: "We Handle the Rest",
    desc: "Airport pickup, visa help, interpreter, and a personal coordinator by your side.",
  },
];

const JourneySteps = () => {
  return (
    <section className="py-24 md:py-32" id="how-it-works">
      <div className="container px-6">
        <h2 className="font-display text-3xl md:text-4xl italic text-center mb-3">
          Your Journey in 5 Simple Steps
        </h2>
        <p className="text-muted-foreground text-center mb-14">
          From first inquiry to full recovery — here's how we take care of everything.
        </p>

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
