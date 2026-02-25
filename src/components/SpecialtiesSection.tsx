import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-16 sm:py-20 md:py-28" id="specialties">
      <div className="container px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3">
            {t("spec_title")}<span className="gradient-text">{t("spec_titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10">{t("spec_subtitle")}</p>
        </motion.div>

        <div className="flex justify-center gap-1 sm:gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-foreground text-center">
          {currentTab.label} <span className="text-primary">{t("spec_treatments")}</span>
        </h3>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
          >
            {currentTab.data.map(({ name, icon: Icon, rating, price }) => (
              <div
                key={name}
                className="blue-gradient-box border border-primary/10 rounded-2xl p-3.5 sm:p-5 flex flex-col items-center text-center hover-lift cursor-pointer group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="font-medium text-foreground text-[11px] sm:text-xs leading-tight mb-2 sm:mb-3 min-h-[2rem] sm:min-h-[2.5rem]">{name}</span>
                <p className="text-primary text-[10px] sm:text-xs font-medium">{rating} {t("spec_rated")}</p>
                <p className="text-primary/70 text-[9px] sm:text-[10px] mb-2">{t("spec_valueForMoney")}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{t("spec_packagesFrom")}</p>
                <p className="text-primary text-xs sm:text-sm font-bold">{price}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
