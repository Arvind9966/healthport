import { useState } from "react";
import {
  Scissors, Heart, Ear, Eye, Brain, Baby, Bone, Smile,
  Stethoscope, Microscope, Syringe, Activity, Shield,
  Sparkles, Search, Leaf, HeartPulse, Droplets, Pill,
  ScanEye, HandHeart, Thermometer, Waves
} from "lucide-react";

type Specialty = {
  name: string;
  icon: React.ElementType;
  rating: string;
  price: string;
};

const medical: Specialty[] = [
  { name: "Bariatric Surgery", icon: Activity, rating: "93%", price: "$1500" },
  { name: "Cardiac Sciences", icon: HeartPulse, rating: "90%", price: "$500" },
  { name: "ENT", icon: Ear, rating: "91%", price: "$18000" },
  { name: "General & Laparoscopic Surgery", icon: Shield, rating: "95%", price: "$1800" },
  { name: "General Medicine", icon: Stethoscope, rating: "93%", price: "$500" },
  { name: "Haematology & BMT", icon: Droplets, rating: "92%", price: "$30000" },
  { name: "Hepatology", icon: Pill, rating: "92%", price: "$11000" },
  { name: "Infectious Disease", icon: Microscope, rating: "92%", price: "$2000" },
  { name: "Infertility", icon: Baby, rating: "90%", price: "$3000" },
  { name: "Nephrology & Urology", icon: Syringe, rating: "91%", price: "$3000" },
  { name: "Neuro Sciences", icon: Brain, rating: "95%", price: "$5500" },
  { name: "Neurology", icon: Brain, rating: "93%", price: "$2500" },
  { name: "Obstetrics & Gynecology", icon: Baby, rating: "92%", price: "$2500" },
  { name: "Oncology", icon: Search, rating: "95%", price: "$600" },
  { name: "Ophthalmology", icon: ScanEye, rating: "95%", price: "$800" },
  { name: "Orthopedics", icon: Bone, rating: "92%", price: "$2200" },
  { name: "Paediatrics & Neonatology", icon: HandHeart, rating: "90%", price: "$500" },
  { name: "Spine Surgery", icon: Bone, rating: "95%", price: "$4000" },
  { name: "Transplant", icon: Heart, rating: "90%", price: "$6000" },
  { name: "Urology", icon: Thermometer, rating: "93%", price: "$3000" },
  { name: "Vascular Surgery", icon: Waves, rating: "90%", price: "$3000" },
];

const aesthetic: Specialty[] = [
  { name: "Dental", icon: Smile, rating: "91%", price: "$100" },
  { name: "Hair Transplant", icon: Scissors, rating: "91%", price: "$2000" },
  { name: "Plastic, Aesthetic & Reconstructive Surgery", icon: Sparkles, rating: "91%", price: "$200" },
];

const wellness: Specialty[] = [
  { name: "Health and Wellness", icon: Leaf, rating: "90%", price: "$200" },
  { name: "Neuro-Wellness", icon: Brain, rating: "92%", price: "$500" },
];

const tabs = [
  { key: "medical", label: "Medical", data: medical },
  { key: "aesthetic", label: "Aesthetic", data: aesthetic },
  { key: "wellness", label: "Wellness", data: wellness },
] as const;

const SpecialtiesSection = () => {
  const [activeTab, setActiveTab] = useState<string>("medical");
  const currentTab = tabs.find((t) => t.key === activeTab)!;

  return (
    <section className="py-24 md:py-32" id="specialties">
      <div className="container px-6">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-3">
          Browse by <span className="text-primary">Specialty</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Find the right treatment across 30+ medical disciplines worldwide.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-10 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h3 className="text-2xl font-semibold mb-8 text-foreground">
          {currentTab.label} <span className="text-primary">Treatments</span>
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {currentTab.data.map(({ name, icon: Icon, rating, price }) => (
            <div
              key={name}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm mb-3 min-h-[2.5rem]">{name}</span>
              <p className="text-primary text-xs font-medium">{rating} Rated</p>
              <p className="text-primary text-xs mb-3">Value for Money</p>
              <p className="text-xs text-muted-foreground">Packages Starting from</p>
              <p className="text-primary text-sm font-semibold">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
