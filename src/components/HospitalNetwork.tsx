import { motion } from "framer-motion";
import { MapPin, Star, Bed } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

type HospitalData = {
  name: string;
  shortName: string;
  location: string;
  beds: string;
  rating: string;
  specialties: string[];
  accreditation: string;
  color: string;
};

const hospitals: HospitalData[] = [
  {
    name: "Fortis Healthcare",
    shortName: "F",
    location: "New Delhi, Gurugram & 27+ cities",
    beds: "4,000+",
    rating: "4.6",
    specialties: ["Cardiac Sciences", "Oncology", "Neurosciences", "Orthopedics"],
    accreditation: "JCI & NABH",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Medanta – The Medicity",
    shortName: "M",
    location: "Gurugram, Lucknow, Patna",
    beds: "2,600+",
    rating: "4.7",
    specialties: ["Heart Institute", "Neurosciences", "Cancer Institute", "Liver Transplant"],
    accreditation: "JCI & NABH",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Narayana Health",
    shortName: "N",
    location: "Bangalore, Kolkata & 19+ cities",
    beds: "6,200+",
    rating: "4.5",
    specialties: ["Cardiac Surgery", "Organ Transplant", "Oncology", "Nephrology"],
    accreditation: "NABH",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "HCG Cancer Centre",
    shortName: "HCG",
    location: "Bangalore & 24+ centres",
    beds: "2,000+",
    rating: "4.6",
    specialties: ["Medical Oncology", "Radiation Therapy", "Surgical Oncology", "BMT"],
    accreditation: "NABH",
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Apollo Hospitals",
    shortName: "A",
    location: "Chennai, Delhi, Hyderabad & 70+ cities",
    beds: "10,000+",
    rating: "4.7",
    specialties: ["Cardiac Sciences", "Robotic Surgery", "Organ Transplant", "IVF"],
    accreditation: "JCI & NABH",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "BM Birla Heart Research",
    shortName: "B",
    location: "Kolkata",
    beds: "700+",
    rating: "4.5",
    specialties: ["Cardiac Surgery", "Cardiology", "Cardiac Rehab", "Vascular Surgery"],
    accreditation: "NABH",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Manipal Hospitals",
    shortName: "MH",
    location: "Bangalore, Delhi & 15+ cities",
    beds: "7,600+",
    rating: "4.6",
    specialties: ["Organ Transplant", "Oncology", "Neurosciences", "Bariatric Surgery"],
    accreditation: "JCI & NABH",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Max Healthcare",
    shortName: "MX",
    location: "Delhi NCR & North India",
    beds: "3,400+",
    rating: "4.6",
    specialties: ["Oncology", "Neurosciences", "Cardiac Sciences", "Orthopedics"],
    accreditation: "JCI & NABH",
    color: "from-cyan-500 to-teal-600",
  },
  {
    name: "Hinduja Hospital",
    shortName: "H",
    location: "Mumbai",
    beds: "500+",
    rating: "4.5",
    specialties: ["Kidney Transplant", "Joint Replacement", "Oncology", "Neurology"],
    accreditation: "NABH",
    color: "from-indigo-500 to-blue-700",
  },
];

const HospitalCard = ({ hospital }: { hospital: HospitalData }) => (
  <div className="flex-shrink-0 w-[280px] xs:w-[300px] sm:w-[340px] blue-gradient-box border border-primary/10 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 cursor-pointer group hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300">
    <div className="flex items-center gap-3 mb-3 xs:mb-4">
      <div className={`w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${hospital.color} flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg shadow-md flex-shrink-0`}>
        {hospital.shortName}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-foreground text-sm xs:text-base sm:text-lg leading-tight truncate">
          {hospital.name}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground mt-0.5">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="text-[10px] xs:text-xs truncate">{hospital.location}</span>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-3 xs:gap-4 mb-3 xs:mb-4">
      <div className="flex items-center gap-1">
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span className="text-xs xs:text-sm font-semibold text-foreground">{hospital.rating}</span>
      </div>
      <div className="flex items-center gap-1">
        <Bed className="w-3.5 h-3.5 text-primary" />
        <span className="text-[10px] xs:text-xs text-muted-foreground">{hospital.beds} Beds</span>
      </div>
      <span className="text-[9px] xs:text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
        {hospital.accreditation}
      </span>
    </div>
    <div className="flex flex-wrap gap-1 xs:gap-1.5">
      {hospital.specialties.map((spec) => (
        <span
          key={spec}
          className="text-[9px] xs:text-[10px] sm:text-xs px-2 xs:px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50"
        >
          {spec}
        </span>
      ))}
    </div>
    <Link
      to="/hospitals"
      className="mt-3 xs:mt-4 inline-flex items-center justify-center text-xs xs:text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-4 py-2 rounded-xl transition-colors duration-200"
    >
      View in Detail
    </Link>
  </div>
);

const HospitalNetwork = () => {
  const { t } = useLanguage();
  const tripled = [...hospitals, ...hospitals, ...hospitals];

  return (
    <section className="py-4 xs:py-5 sm:py-6 md:py-8 scroll-mt-24" id="hospitals">
      <div className="container px-4 xs:px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 xs:mb-8 sm:mb-10"
        >
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-3">
            {t("hospital_title")}
          </h2>
          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
            Partnered with India's most trusted hospitals — internationally accredited and globally recognized for excellence.
          </p>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-3 xs:gap-4 sm:gap-5 animate-scroll-left hover:[animation-play-state:paused]">
          {tripled.map((hospital, index) => (
            <HospitalCard key={`${hospital.name}-${index}`} hospital={hospital} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalNetwork;
