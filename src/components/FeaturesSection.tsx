import { Building2, Users, Stethoscope, Globe, Languages } from "lucide-react";

const features = [
  { icon: Building2, title: "Accredited Hospitals", desc: "JCI & NABH certified facilities" },
  { icon: Users, title: "Expert Surgeons", desc: "Hand-picked by our medical board" },
  { icon: Stethoscope, title: "30+ Specialties", desc: "Covering every major discipline" },
  { icon: Globe, title: "8 Countries", desc: "India, Thailand, Turkey & beyond" },
  { icon: Languages, title: "Multilingual Support", desc: "Care coordinators in your language" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-section-light">
      <div className="container px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-3">
          Everything You Need, <span className="text-primary">One Platform</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Browse vetted doctors, compare hospitals, and plan your entire trip — all in one place.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3">
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
