import { Smile, Scissors, Sparkles, Bone, Baby, Heart, Brain, Eye, Ear } from "lucide-react";

const specialties = [
  { name: "Dentistry", icon: Smile },
  { name: "Hair Transplantation", icon: Scissors },
  { name: "Cosmetic Surgery", icon: Sparkles },
  { name: "Orthopedic Surgery", icon: Bone },
  { name: "IVF & Fertility", icon: Baby },
  { name: "Heart Care", icon: Heart },
  { name: "Neurology", icon: Brain },
  { name: "Eye/Lasik Care", icon: Eye },
  { name: "ENT", icon: Ear },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-20" id="specialties">
      <div className="container px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-3">
          Browse by <span className="text-primary">Specialty</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Find the right treatment across 30+ medical disciplines worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {specialties.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
