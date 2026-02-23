import { ArrowRight, ExternalLink, Stethoscope } from "lucide-react";

const SavingsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-6">
        <div className="blue-gradient-box rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-primary/10">
          <div className="flex-1">
            <p className="text-primary font-semibold tracking-widest text-sm mb-4 uppercase">Save Up To</p>
            <h2 className="font-display text-6xl md:text-7xl text-primary mb-2">70%</h2>
            <h3 className="font-display text-2xl md:text-3xl mb-4 text-foreground uppercase tracking-wide">
              Compared to Home Country Costs
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Access internationally accredited hospitals at a fraction of what you'd pay locally — without compromising on quality or safety.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                Begin Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-border px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-muted transition-colors">
                Request a Quote <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-secondary/50 flex items-center justify-center">
            <Stethoscope className="w-20 h-20 text-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsSection;
