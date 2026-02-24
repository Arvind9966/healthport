import { useState } from "react";
import {
  Scissors, Heart, Ear, Eye, Brain, Baby, Bone, Smile,
  Stethoscope, Microscope, Syringe, Activity, Shield,
  Sparkles, Search, Leaf, HeartPulse, Droplets, Pill,
  ScanEye, HandHeart, Thermometer, Waves
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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

const SpecialtiesSection = () => {
  const { t } = useLanguage();

  const tabs = [
    { key: "medical", label: t("spec_tabMedical"), data: medical },
    { key: "aesthetic", label: t("spec_tabAesthetic"), data: aesthetic },
    { key: "wellness", label: t("spec_tabWellness"), data: wellness },
  ] as const;

  const [activeTab, setActiveTab] = useState<string>("medical");
  const currentTab = tabs.find((tab) => tab.key === activeTab)!;

  return (
    <section className="py-16 sm:py-24 md:py-32" id="specialties">
      <div className="container px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-center mb-3">
          {t("spec_title")}<span className="text-primary">{t("spec_titleHighlight")}</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base text-center mb-8 sm:mb-10">{t("spec_subtitle")}</p>

        <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-10 border-b border-border overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-foreground">
          {currentTab.label} <span className="text-primary">{t("spec_treatments")}</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
          {currentTab.data.map(({ name, icon: Icon, rating, price }) => (
            <div
              key={name}
              className="blue-gradient-box border border-primary/10 rounded-2xl p-3 sm:p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-secondary flex items-center justify-center mb-2 sm:mb-3">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground text-xs sm:text-sm mb-2 sm:mb-3 min-h-[2rem] sm:min-h-[2.5rem]">{name}</span>
              <p className="text-primary text-[10px] sm:text-xs font-medium">{rating} {t("spec_rated")}</p>
              <p className="text-primary text-[10px] sm:text-xs mb-2 sm:mb-3">{t("spec_valueForMoney")}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{t("spec_packagesFrom")}</p>
              <p className="text-primary text-xs sm:text-sm font-semibold">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
