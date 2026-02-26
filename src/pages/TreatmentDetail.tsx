import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star, ThumbsUp, Building2, Stethoscope, Activity, Heart,
  HelpCircle, MessageCircle, Shield, Globe, CheckCircle,
  IndianRupee, ArrowRight, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getTreatmentBySlug } from "@/data/treatments";
import { getSubTreatmentIcon } from "@/lib/treatment-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

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
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#specialties" className="hover:text-primary transition-colors">Treatments</Link>
          <span>/</span>
          <span className="text-foreground font-medium">{treatment.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-primary/10 p-6 sm:p-8"
              style={{
                background: "linear-gradient(135deg, hsl(207 60% 97%) 0%, hsl(207 80% 92%) 50%, hsl(207 70% 95%) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-primary/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Trusted Treatment</span>
                </div>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {treatment.name}
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 max-w-2xl leading-relaxed">{treatment.shortDescription}</p>
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1 bg-background/60 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border/50">
                    {stars.map((filled, i) => (
                      <Star key={i} className={`w-4 h-4 ${filled ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30"}`} />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-1">{treatment.rating}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full">
                    {treatment.valueForMoney} Value for Money
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-2xl border border-primary/10 p-5 sm:p-6 bg-background"
            >
              <h2 className="text-sm sm:text-base font-semibold text-foreground text-center mb-5">
                Get the best {treatment.name} from all around the world
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {[
                  { icon: ThumbsUp, value: treatment.stats.successRate, label: "Success Rate", color: "text-emerald-500" },
                  { icon: Building2, value: treatment.stats.hospitals, label: "Hospitals", color: "text-primary" },
                  { icon: Stethoscope, value: treatment.stats.doctors, label: "Doctors", color: "text-violet-500" },
                  { icon: Activity, value: treatment.stats.surgeries, label: "Surgeries", color: "text-amber-500" },
                  { icon: Heart, value: treatment.stats.livesTouched, label: "Lives Touched", color: "text-rose-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl blue-gradient-box border border-primary/10 hover-lift"
                  >
                    <div className={`w-10 h-10 rounded-full bg-background flex items-center justify-center mb-2 shadow-sm border border-border/50`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-foreground">{stat.value}</span>
                    <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sub-Treatments Grid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-1 h-7 rounded-full bg-primary" />
                <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">
                  Select Treatments & Procedures
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {treatment.subTreatments.map((sub, i) => {
                  const SubIcon = getSubTreatmentIcon(sub.name);
                  return (
                    <motion.div
                      key={sub.name}
                      custom={i}
                      variants={fadeUp}
                      className="group relative bg-background rounded-xl border border-border/60 p-4 sm:p-5 flex flex-col items-center text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:scale-105 transition-all duration-300">
                        <SubIcon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                      </div>
                      <h3 className="text-[11px] sm:text-sm font-semibold text-foreground leading-tight mb-2 min-h-[2rem] sm:min-h-[2.5rem]">
                        {sub.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5">Packages starting from</p>
                      <p className="text-sm sm:text-base font-bold text-foreground mb-3">{sub.price}</p>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 w-full justify-center group/btn"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Chat Now
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-primary/10 p-6 sm:p-8 blue-gradient-box">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-7 rounded-full bg-primary" />
                  <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">Overview</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{treatment.overview}</p>
              </div>
            </motion.section>

            {/* Conditions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-primary/10 p-6 sm:p-8 bg-background">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-7 rounded-full bg-primary" />
                  <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">Conditions Treated</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {treatment.conditions.map((c) => (
                    <div key={c} className="flex items-center gap-3 text-sm text-muted-foreground p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Procedures & Costs */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-primary/10 p-6 sm:p-8 blue-gradient-box">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-7 rounded-full bg-primary" />
                  <h2 className="font-display text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" /> Procedures & Estimated Costs
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {treatment.procedures.map((proc) => (
                    <div key={proc.name} className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover-lift">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-sm sm:text-base">{proc.name}</h3>
                        <span className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{proc.cost}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{proc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-primary/10 p-6 sm:p-8 bg-background">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-7 rounded-full bg-primary" />
                  <h2 className="font-display text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions
                  </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {treatment.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border/30">
                      <AccordionTrigger className="text-sm sm:text-base text-foreground hover:no-underline font-medium">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-2xl border border-primary/10 overflow-hidden sticky top-24"
            >
              {/* Pricing header */}
              <div className="p-5 sm:p-6" style={{
                background: "linear-gradient(135deg, hsl(207 60% 97%) 0%, hsl(207 80% 92%) 50%, hsl(207 70% 95%) 100%)",
              }}>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Packages starting from</p>
                <p className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{treatment.startingPrice}</p>

                <p className="text-sm text-foreground font-medium mb-3">Need help choosing the right package?</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat to our experts now
                </a>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-3">
                  <Shield className="w-3.5 h-3.5" /> Your health data is protected with us
                </p>
              </div>

              {/* Why India */}
              <div className="p-5 sm:p-6 border-t border-border/30 bg-background">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" /> Why Choose India?
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {treatment.whyIndia.map((reason) => (
                    <li key={reason} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Hospitals */}
              <div className="p-5 sm:p-6 border-t border-border/30 bg-background">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> Top Hospitals
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {treatment.topHospitals.map((h) => (
                    <li key={h} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link to="/hospitals" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                  View All Hospitals <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* CTA */}
              <div className="p-5 sm:p-6 border-t border-border/30 bg-background">
                <Link
                  to="/#contact-us"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 px-5 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get a Free Estimate <ArrowRight className="w-4 h-4" />
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
