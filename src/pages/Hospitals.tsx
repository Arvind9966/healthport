import { motion } from "framer-motion";
import { MapPin, Star, Bed, Shield, Phone, Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/i18n/LanguageContext";

type HospitalDetail = {
  name: string;
  shortName: string;
  location: string;
  city: string;
  beds: string;
  rating: string;
  specialties: string[];
  accreditation: string;
  color: string;
  description: string;
  facilities: string[];
  services: string[];
  founded: string;
  phone: string;
  website: string;
  imageUrl: string;
};

const hospitalsData: HospitalDetail[] = [
  {
    name: "Apollo Hospitals",
    shortName: "A",
    location: "Chennai, Delhi, Hyderabad & 70+ cities",
    city: "Chennai (HQ)",
    beds: "10,000+",
    rating: "4.7",
    specialties: ["Cardiac Sciences", "Robotic Surgery", "Organ Transplant", "IVF", "Oncology", "Neurosciences", "Orthopedics", "Gastroenterology"],
    accreditation: "JCI & NABH",
    color: "from-sky-500 to-blue-600",
    description: "Apollo Hospitals is Asia's foremost integrated healthcare services provider. Founded in 1983 by Dr. Prathap C. Reddy, Apollo has been a pioneer in private healthcare in India. With a network of 70+ hospitals, Apollo offers world-class clinical excellence, cutting-edge technology, and compassionate patient care across 140+ countries.",
    facilities: ["24/7 Emergency & Trauma Centre", "Advanced Robotic Surgery Suite", "PET-CT & Cyber Knife", "International Patient Lounge", "Pharmacy & Diagnostics", "Telemedicine Services", "Rehabilitation Centre", "Helipad"],
    services: ["Medical Tourism Coordination", "Visa Assistance", "Airport Transfers", "Language Interpreters", "International Insurance", "Second Opinion Services", "Post-Discharge Follow-up"],
    founded: "1983",
    phone: "+91 44 2829 0200",
    website: "apollohospitals.com",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    name: "Fortis Healthcare",
    shortName: "F",
    location: "New Delhi, Gurugram & 27+ cities",
    city: "Gurugram (HQ)",
    beds: "4,000+",
    rating: "4.6",
    specialties: ["Cardiac Sciences", "Oncology", "Neurosciences", "Orthopedics", "Renal Sciences", "Liver Transplant", "Pulmonology", "Urology"],
    accreditation: "JCI & NABH",
    color: "from-emerald-500 to-teal-600",
    description: "Fortis Healthcare is one of India's leading integrated healthcare delivery service providers. With 27+ hospitals across India, Fortis is committed to delivering quality healthcare through innovation, technology, and well-trained clinical talent. It's particularly known for its cardiac care and oncology programmes.",
    facilities: ["Cardiac Catheterization Labs", "Advanced Radiation Therapy", "Modular Operation Theatres", "NICU & PICU", "Digital Pathology Lab", "Patient Lounges", "Cafeteria & Pharmacy"],
    services: ["International Patient Services", "Insurance Tie-ups", "Dedicated Relationship Managers", "Translation Support", "Accommodation Assistance", "Medical Records Management"],
    founded: "2001",
    phone: "+91 124 462 1444",
    website: "fortishealthcare.com",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80",
  },
  {
    name: "Medanta – The Medicity",
    shortName: "M",
    location: "Gurugram, Lucknow, Patna",
    city: "Gurugram",
    beds: "2,600+",
    rating: "4.7",
    specialties: ["Heart Institute", "Neurosciences", "Cancer Institute", "Liver Transplant", "Kidney & Urology", "Bone & Joint", "Gastroenterology", "Robotics Surgery"],
    accreditation: "JCI & NABH",
    color: "from-blue-500 to-indigo-600",
    description: "Medanta – The Medicity is a multi-super specialty institute founded by Dr. Naresh Trehan, a world-renowned cardiovascular surgeon. Spread across 43 acres, Medanta houses 20+ super-specialty institutes with 1,600+ beds. It is known globally for its advanced cardiac surgery, organ transplant, and cancer care programmes.",
    facilities: ["Hybrid Operating Rooms", "Da Vinci Robotic System", "Radiation Oncology Suite", "Stem Cell Lab", "Sleep Lab", "Rehabilitation Pool", "Prayer Room", "Guest House"],
    services: ["Visa Letter Issuance", "Airport Pick-up & Drop", "Interpreter Services", "Concierge Desk", "Diet Counselling", "Second Opinion via Video"],
    founded: "2009",
    phone: "+91 124 414 1414",
    website: "medanta.org",
    imageUrl: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
  },
  {
    name: "Narayana Health",
    shortName: "N",
    location: "Bangalore, Kolkata & 19+ cities",
    city: "Bangalore (HQ)",
    beds: "6,200+",
    rating: "4.5",
    specialties: ["Cardiac Surgery", "Organ Transplant", "Oncology", "Nephrology", "Neurosurgery", "Pediatric Surgery", "Vascular Surgery", "Pulmonology"],
    accreditation: "NABH",
    color: "from-orange-500 to-red-500",
    description: "Narayana Health, founded by Dr. Devi Shetty, is one of India's largest hospital networks dedicated to making quality healthcare affordable and accessible. With a mission of delivering high-end healthcare at low cost, Narayana Health performs more heart surgeries than any other hospital in the world.",
    facilities: ["Advanced Cardiac OR", "Bone Marrow Transplant Unit", "Nuclear Medicine", "Dialysis Centre", "Neonatal ICU", "Physiotherapy Centre", "Blood Bank", "24/7 Pharmacy"],
    services: ["Affordable Treatment Packages", "International Patient Desk", "Travel & Visa Support", "Online Consultations", "EMI Payment Options", "Post-Treatment Teleconsults"],
    founded: "2000",
    phone: "+91 80 7122 2222",
    website: "narayanahealth.org",
    imageUrl: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
  },
  {
    name: "Manipal Hospitals",
    shortName: "MH",
    location: "Bangalore, Delhi & 15+ cities",
    city: "Bangalore (HQ)",
    beds: "7,600+",
    rating: "4.6",
    specialties: ["Organ Transplant", "Oncology", "Neurosciences", "Bariatric Surgery", "Cardiac Sciences", "Gastroenterology", "Orthopedics", "Fertility & IVF"],
    accreditation: "JCI & NABH",
    color: "from-amber-500 to-orange-600",
    description: "Manipal Hospitals is one of India's largest multi-specialty healthcare providers, part of the Manipal Education and Medical Group. Known for its evidence-based medicine, compassionate care, and advanced technology, Manipal Hospitals has grown into a network of 30+ hospitals serving millions of patients annually.",
    facilities: ["Gamma Knife Centre", "Bone Marrow Transplant", "IVF Lab", "Advanced Endoscopy Suite", "Cardiac Cath Labs", "ICU with Tele-monitoring", "Patient Education Centre"],
    services: ["International Patient Care", "Travel Desk", "Language Support", "Insurance Processing", "Accommodation Booking", "Medical Visa Assistance", "Dedicated Coordinators"],
    founded: "1953",
    phone: "+91 80 2502 4444",
    website: "manipalhospitals.com",
    imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  },
  {
    name: "Max Healthcare",
    shortName: "MX",
    location: "Delhi NCR & North India",
    city: "New Delhi (HQ)",
    beds: "3,400+",
    rating: "4.6",
    specialties: ["Oncology", "Neurosciences", "Cardiac Sciences", "Orthopedics", "Liver & Biliary Sciences", "Urology", "Aesthetic & Reconstructive Surgery", "IVF"],
    accreditation: "JCI & NABH",
    color: "from-cyan-500 to-teal-600",
    description: "Max Healthcare is one of India's largest hospital chains, operating 17 healthcare facilities across North India. It is known for its clinical excellence, ethical practices, and patient-centric approach. Max Healthcare performs cutting-edge procedures in oncology, neurosciences, and cardiac sciences.",
    facilities: ["CyberKnife VSI", "PET-CT Scanner", "Advanced ICU", "Modular OTs", "Max Lab (Diagnostics)", "Physiotherapy & Rehab", "Executive Health Check-up Centre"],
    services: ["International Patient Division", "Visa Invitation Letters", "Airport Transfers", "Guest House Facility", "Dietary Services", "Insurance Coordination", "Tele-Radiology"],
    founded: "2000",
    phone: "+91 11 2651 5050",
    website: "maxhealthcare.in",
    imageUrl: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
  },
  {
    name: "HCG Cancer Centre",
    shortName: "HCG",
    location: "Bangalore & 24+ centres",
    city: "Bangalore (HQ)",
    beds: "2,000+",
    rating: "4.6",
    specialties: ["Medical Oncology", "Radiation Therapy", "Surgical Oncology", "Bone Marrow Transplant", "Immunotherapy", "Precision Medicine", "Palliative Care", "Pediatric Oncology"],
    accreditation: "NABH",
    color: "from-purple-500 to-violet-600",
    description: "HCG (HealthCare Global Enterprises) is India's largest provider of cancer care, with a network of 24+ comprehensive cancer centres. HCG brings together an expert team of oncologists with the latest technology to deliver personalized cancer treatment. It is a pioneer in precision oncology in India.",
    facilities: ["TomoTherapy System", "CyberKnife", "PET-CT", "Linear Accelerators", "Molecular Diagnostics Lab", "Chemotherapy Daycare", "Palliative Care Suite", "Clinical Trial Unit"],
    services: ["Cancer Second Opinions", "Tumour Board Reviews", "International Patient Services", "Genetic Counselling", "Nutrition & Diet Support", "Psychological Counselling", "Follow-up Teleconsultation"],
    founded: "1989",
    phone: "+91 80 3355 3555",
    website: "hcgoncology.com",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
  },
  {
    name: "BM Birla Heart Research",
    shortName: "B",
    location: "Kolkata",
    city: "Kolkata",
    beds: "700+",
    rating: "4.5",
    specialties: ["Cardiac Surgery", "Cardiology", "Cardiac Rehab", "Vascular Surgery", "Electrophysiology", "Pediatric Cardiology", "Heart Failure Programme"],
    accreditation: "NABH",
    color: "from-rose-500 to-pink-600",
    description: "BM Birla Heart Research Centre is one of eastern India's premier cardiac care hospitals, located in Kolkata. It is known for its advanced cardiac surgery, interventional cardiology, and comprehensive cardiac rehabilitation programmes. The centre has performed thousands of open-heart surgeries with outcomes comparable to the best global institutions.",
    facilities: ["Hybrid Cardiac Cath Lab", "Cardiac ICU", "Heart Failure Clinic", "Cardiac Rehab Centre", "Echo Lab", "Electrophysiology Lab", "Preventive Cardiology Unit"],
    services: ["Cardiac Risk Assessment", "Pre-operative Counselling", "Post-surgery Rehabilitation", "Telemedicine Follow-ups", "Insurance Processing", "Patient Accommodation Support"],
    founded: "1989",
    phone: "+91 33 6630 0000",
    website: "bmbirlaheart.com",
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
  },
  {
    name: "Hinduja Hospital",
    shortName: "H",
    location: "Mumbai",
    city: "Mumbai",
    beds: "500+",
    rating: "4.5",
    specialties: ["Kidney Transplant", "Joint Replacement", "Oncology", "Neurology", "Gastroenterology", "Urology", "Ophthalmology", "ENT"],
    accreditation: "NABH",
    color: "from-indigo-500 to-blue-700",
    description: "P.D. Hinduja National Hospital & Medical Research Centre is one of Mumbai's most reputed multi-specialty hospitals. Known for its world-class infrastructure and compassionate care, Hinduja Hospital has been a leader in kidney transplants, joint replacements, and cancer care in western India for over three decades.",
    facilities: ["Kidney Transplant Unit", "Joint Replacement Centre", "Cancer Centre", "Neuro Lab", "MRI & CT Suite", "Endoscopy Suite", "Day Care Centre", "Clinical Research Wing"],
    services: ["International Patient Desk", "Visa Facilitation", "Guest Relations", "Insurance Desk", "Diet & Nutrition Counselling", "Discharge Planning", "Home Healthcare"],
    founded: "1951",
    phone: "+91 22 2445 1515",
    website: "hindujahospital.com",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
  },
];

const HospitalDetailCard = ({ hospital, index }: { hospital: HospitalDetail; index: number }) => (
  <motion.div
    id={hospital.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="blue-gradient-box border border-primary/10 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
  >
    <div className="md:flex">
      {/* Image */}
      <div className="md:w-2/5 relative overflow-hidden">
        <img
          src={hospital.imageUrl}
          alt={hospital.name}
          className="w-full h-56 md:h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="text-[10px] xs:text-xs px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-primary font-semibold border border-primary/20">
            <Shield className="w-3 h-3 inline mr-1" />
            {hospital.accreditation}
          </span>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${hospital.color} opacity-30`} />
      </div>

      {/* Content */}
      <div className="md:w-3/5 p-5 sm:p-6 lg:p-8 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${hospital.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md flex-shrink-0`}>
            {hospital.shortName}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
              {hospital.name}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{hospital.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="text-xs sm:text-sm font-semibold">{hospital.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Bed className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs sm:text-sm">{hospital.beds} Beds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{hospital.description}</p>

        {/* Specialties */}
        <div>
          <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Specialties</h3>
          <div className="flex flex-wrap gap-1.5">
            {hospital.specialties.map((spec) => (
              <span key={spec} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/15">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div>
          <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Facilities</h3>
          <div className="flex flex-wrap gap-1.5">
            {hospital.facilities.map((fac) => (
              <span key={fac} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50">
                {fac}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Patient Services</h3>
          <div className="flex flex-wrap gap-1.5">
            {hospital.services.map((svc) => (
              <span key={svc} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-accent/50 text-accent-foreground border border-border/50">
                {svc}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 border-t border-border/30 text-xs text-muted-foreground">
          <span>Est. {hospital.founded}</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{hospital.phone}</span>
          <span className="flex items-center gap-1"><Globe className="w-3 h-3" />{hospital.website}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Hospitals = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {t("hospital_title")}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-3xl mt-3">
            Explore our complete network of internationally accredited hospitals across India. Each facility is vetted for clinical excellence, patient safety, and world-class infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8">
          {hospitalsData.map((hospital, index) => (
            <HospitalDetailCard key={hospital.name} hospital={hospital} index={index} />
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Hospitals;
