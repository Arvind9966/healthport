import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { getSubTreatmentIcon } from "@/lib/treatment-icons";
import { useNavigate } from "react-router-dom";

const quotes = [
  { name: "Knee Replacement", slug: "orthopaedics", price: "$2,700 – $7,500" },
  { name: "Hip Replacement", slug: "orthopaedics", price: "$3,000 – $5,500" },
  { name: "Cancer Treatment", slug: "oncology", price: "$500 – $6,600" },
  { name: "Cardiac Surgery", slug: "cardiac-sciences", price: "$1,650 – $6,500" },
  { name: "IVF & Fertility Treatment", slug: "infertility-ivf", price: "From $1,600" },
  { name: "Gastro Surgery", slug: "general-laparoscopic-surgery", price: "$900 – $5,200" },
];

const LowestQuotesSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-4 xs:py-5 sm:py-6 md:py-8">
      <div className="container px-4 xs:px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl italic mb-3">
            Lowest Quotes Assured
          </h2>
          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
            We constantly negotiate better prices and alternatives without compromising treatment quality. Our prices are consistently lower.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 xs:space-y-4">
          {quotes.map((item, index) => {
            const Icon = getSubTreatmentIcon(item.name);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="blue-gradient-box border border-primary/10 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 flex items-center gap-4 xs:gap-5 hover-lift cursor-pointer"
                onClick={() => navigate(`/treatment/${item.slug}`)}
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 xs:w-8 xs:h-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm xs:text-base sm:text-lg font-semibold text-primary mb-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs xs:text-sm text-foreground">
                    Starting <span className="font-bold">{item.price}</span>
                  </p>
                  <button
                    className="text-xs xs:text-sm font-medium text-destructive hover:underline mt-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/treatment/${item.slug}`);
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LowestQuotesSection;
