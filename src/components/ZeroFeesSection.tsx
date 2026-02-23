import { ArrowRight } from "lucide-react";

const ZeroFeesSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        <div className="bg-section-light rounded-3xl p-12 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Zero Service Fees. <span className="text-primary">Always.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            We earn through hospital partnerships — you pay the exact same rate as a walk-in patient.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            Get Your Free Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZeroFeesSection;
