import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const hospitals = [
  "Fortis", "Medanta", "Narayana", "HCG", "Apollo", "BM Birla", "Manipal", "Max", "Hinduja",
];

const HospitalNetwork = () => {
  const { t } = useLanguage();

  return (
    <section className="py-4 xs:py-5 sm:py-6 md:py-8 scroll-mt-24" id="hospitals">
      <div className="container px-4 xs:px-5 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-3"
        >
          {t("hospital_title")}
        </motion.h2>
        <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mb-8 xs:mb-10 sm:mb-14" />
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 xs:gap-4 animate-scroll-left">
          {[...hospitals, ...hospitals, ...hospitals].map((h, i) => (
            <div key={i} className="flex-shrink-0 blue-gradient-box rounded-xl px-5 xs:px-6 sm:px-8 py-3.5 xs:py-4 sm:py-5 border border-primary/10 min-w-[120px] xs:min-w-[140px] sm:min-w-[180px] text-center hover-lift">
              <span className="text-xs xs:text-sm font-semibold text-foreground">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
