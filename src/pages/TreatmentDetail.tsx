import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ThumbsUp, Building2, Stethoscope, Activity, Heart, HelpCircle, MessageCircle, Shield, Globe, CheckCircle, IndianRupee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTreatmentBySlug } from "@/data/treatments";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = getTreatmentBySlug(slug || "");

  if (!treatment) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Treatment Not Found</h1>
          <p className="text-muted-foreground mb-6">The treatment you're looking for doesn't exist.</p>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(treatment.rating));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 sm:px-6 py-6 sm:py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-5">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#specialties" className="hover:text-primary transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{treatment.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-7">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8"
            >
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
                {treatment.name}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{treatment.shortDescription}</p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {stars.map((filled, i) => (
                    <Star key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30"}`} />
                  ))}
                  <span className="text-sm font-semibold text-foreground ml-1.5">{treatment.rating}</span>
                </div>
                <span className="text-xs sm:text-sm text-primary font-medium">{treatment.valueForMoney} Rated Value for Money</span>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-6"
            >
              <h2 className="text-sm sm:text-base font-semibold text-foreground text-center mb-5">
                Get the best {treatment.name} from all around the world
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[
                  { icon: ThumbsUp, value: treatment.stats.successRate, label: "Success Rate" },
                  { icon: Building2, value: treatment.stats.hospitals, label: "Hospitals" },
                  { icon: Stethoscope, value: treatment.stats.doctors, label: "Doctors" },
                  { icon: Activity, value: treatment.stats.surgeries, label: `${treatment.name.split(" ")[0]} Surgeries` },
                  { icon: Heart, value: treatment.stats.livesTouched, label: "Lives Touched" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center p-2 sm:p-3 rounded-xl bg-muted/50 border border-border/50">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-1.5" />
                    <span className="text-sm sm:text-lg font-bold text-foreground">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sub-Treatments Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-5">
                Select Treatments & Procedures
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {treatment.subTreatments.map((sub) => (
                  <div
                    key={sub.name}
                    className="blue-gradient-box border border-primary/10 rounded-xl p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-md hover:border-primary/20 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                      <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-[11px] sm:text-sm font-medium text-foreground leading-tight mb-2 min-h-[2rem] sm:min-h-[2.5rem]">
                      {sub.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">Packages starting from</p>
                    <p className="text-sm sm:text-base font-bold text-foreground">{sub.price}</p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary border border-primary/20 hover:bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors w-full justify-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat Now
                    </a>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{treatment.overview}</p>
            </motion.section>

            {/* Conditions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">Conditions Treated</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {treatment.conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Procedures & Costs */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-primary" /> Procedures & Estimated Costs
              </h2>
              <div className="flex flex-col gap-4">
                {treatment.procedures.map((proc) => (
                  <div key={proc.name} className="bg-muted/50 border border-border/50 rounded-xl p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{proc.name}</h3>
                      <span className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{proc.cost}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{proc.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {treatment.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
                    <AccordionTrigger className="text-sm sm:text-base text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-6 sticky top-24"
            >
              <p className="text-sm text-muted-foreground">Packages starting from</p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{treatment.startingPrice}</p>
              
              <p className="text-sm text-foreground font-medium mb-2">Need help in choosing the right package for your medical trip?</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-colors mb-3"
              >
                <MessageCircle className="w-4 h-4" />
                Chat to our experts now
              </a>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 mb-6">
                <Shield className="w-3.5 h-3.5" /> Your Health data is protected with us
              </p>

              {/* Why India */}
              <div className="border-t border-border/30 pt-5">
                <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Why Choose India?
                </h3>
                <ul className="flex flex-col gap-2">
                  {treatment.whyIndia.map((reason) => (
                    <li key={reason} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Hospitals */}
              <div className="border-t border-border/30 pt-5 mt-5">
                <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> Top Hospitals
                </h3>
                <ul className="flex flex-col gap-2">
                  {treatment.topHospitals.map((h) => (
                    <li key={h} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to="/hospitals" className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:underline">
                  View All Hospitals →
                </Link>
              </div>

              {/* CTA */}
              <div className="border-t border-border/30 pt-5 mt-5">
                <Link
                  to="/#contact-us"
                  className="w-full inline-flex items-center justify-center text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TreatmentDetail;
