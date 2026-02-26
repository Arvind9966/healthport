import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Building2, HelpCircle, IndianRupee, Shield, Globe } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Link */}
        <Link to="/#specialties" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Specialties
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="blue-gradient-box border border-primary/10 rounded-2xl p-6 sm:p-10 mb-8"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">{treatment.category}</span>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            {treatment.name}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl">{treatment.heroDescription}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-8">
              <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{treatment.overview}</p>
            </motion.section>

            {/* Conditions Treated */}
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
          <div className="flex flex-col gap-6">
            {/* Why India */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="blue-gradient-box border border-primary/10 rounded-2xl p-5 sm:p-6 sticky top-24">
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> Why Choose India?
              </h3>
              <ul className="flex flex-col gap-2.5">
                {treatment.whyIndia.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border/30">
                <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" /> Top Hospitals
                </h3>
                <ul className="flex flex-col gap-2">
                  {treatment.topHospitals.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/hospitals"
                  className="mt-4 inline-flex items-center text-xs font-semibold text-primary hover:underline"
                >
                  View All Hospitals →
                </Link>
              </div>

              <div className="mt-6 pt-5 border-t border-border/30">
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
