import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const treatments = [
  {
    name: "Bone Marrow Transplant",
    short: "Bone Marrow",
    data: [
      { country: "India", min: 6500, max: 8500 },
      { country: "Turkey", min: 12000, max: 18000 },
      { country: "UAE", min: 30000, max: 45000 },
      { country: "USA", min: 75000, max: 105000 },
    ],
  },
  {
    name: "Cervical Disc Replacement",
    short: "Cervical Disc",
    data: [
      { country: "India", min: 20000, max: 32000 },
      { country: "Turkey", min: 18000, max: 28000 },
      { country: "UAE", min: 0, max: 0, na: true },
      { country: "USA", min: 115000, max: 170000 },
    ],
  },
  {
    name: "Deep Brain Stimulation",
    short: "Brain Stimulation",
    data: [
      { country: "India", min: 45000, max: 55000 },
      { country: "Turkey", min: 140000, max: 250000 },
      { country: "UAE", min: 45000, max: 180000 },
      { country: "USA", min: 124000, max: 1664800 },
    ],
  },
  {
    name: "Heart Transplant",
    short: "Heart",
    data: [
      { country: "India", min: 3000, max: 6000 },
      { country: "Turkey", min: 2000, max: 9000 },
      { country: "UAE", min: 3000, max: 10000 },
      { country: "USA", min: 9500, max: 75000 },
    ],
  },
  {
    name: "Kidney Transplant",
    short: "Kidney",
    data: [
      { country: "India", min: 6000, max: 14500 },
      { country: "Turkey", min: 15000, max: 45000 },
      { country: "UAE", min: 40000, max: 110000 },
      { country: "USA", min: 250000, max: 450000 },
    ],
  },
  {
    name: "Lung Cancer Treatment",
    short: "Lung Cancer",
    data: [
      { country: "India", min: 65000, max: 85000 },
      { country: "Turkey", min: 75000, max: 100000 },
      { country: "UAE", min: 100000, max: 120000 },
      { country: "USA", min: 150000, max: 500000 },
    ],
  },
  {
    name: "Lung Transplant",
    short: "Lung Transplant",
    data: [
      { country: "India", min: 65000, max: 85000 },
      { country: "Turkey", min: 75000, max: 100000 },
      { country: "UAE", min: 50000, max: 120000 },
      { country: "USA", min: 150000, max: 500000 },
    ],
  },
];

const formatPrice = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
  if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
  return `$${val}`;
};

const TreatmentComparisonChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = treatments[activeIndex];
  const maxVal = Math.max(...active.data.map((d) => d.max));

  return (
    <section className="py-8 md:py-14">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-3">
            Treatment Cost Comparison
          </h2>
          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
            See how India offers world-class treatments at a fraction of the cost compared to other countries.
          </p>
        </motion.div>

        {/* Tabs - responsive grid on mobile, flex wrap on larger */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-2 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {treatments.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActiveIndex(i)}
              className={`px-2.5 py-2 sm:px-4 sm:py-2 rounded-full text-[11px] xs:text-xs sm:text-sm font-medium transition-all text-center leading-tight ${
                i === activeIndex
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span className="hidden sm:inline">{t.name}</span>
              <span className="sm:hidden">{t.short}</span>
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="max-w-3xl mx-auto blue-gradient-box border border-primary/10 rounded-2xl p-4 xs:p-5 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-sm xs:text-base sm:text-lg font-semibold text-primary mb-5 sm:mb-6 text-center">
                {active.name}
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {active.data.map((item, idx) => {
                  const isIndia = item.country === "India";
                  const widthPercent = item.na ? 0 : (item.max / maxVal) * 100;
                  const barColor = isIndia ? "bg-primary" : "bg-foreground/70";

                  return (
                    <motion.div
                      key={item.country}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                        <span
                          className={`w-10 xs:w-14 sm:w-20 text-[10px] xs:text-xs sm:text-sm font-semibold text-right flex-shrink-0 ${
                            isIndia ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {item.country}
                        </span>
                        <div className="flex-1 min-w-0 overflow-hidden">
                          {item.na ? (
                            <span className="text-xs text-muted-foreground italic">N/A</span>
                          ) : (
                            <div className="flex items-center gap-1.5 xs:gap-2 overflow-hidden">
                              <motion.div
                                className={`h-6 xs:h-7 sm:h-9 rounded-md ${barColor} flex-shrink-0`}
                                style={{ maxWidth: "75%" }}
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.max(widthPercent, 5)}%` }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                              />
                              <span
                                className={`text-[9px] xs:text-[10px] sm:text-xs font-medium whitespace-nowrap ${
                                  isIndia ? "text-primary" : "text-foreground/70"
                                }`}
                              >
                                {formatPrice(item.min)} – {formatPrice(item.max)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TreatmentComparisonChart;
