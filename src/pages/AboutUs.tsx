import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Heart, Globe, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    desc: "Every decision we make puts the patient's well-being, comfort, and recovery at the center.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "Clear cost breakdowns, verified hospitals, and honest guidance — no hidden surprises.",
  },
  {
    icon: Globe,
    title: "Global Access",
    desc: "Connecting international patients with India's world-class healthcare system seamlessly.",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    desc: "From medical visas to accommodation, translators to on-ground care — we handle it all.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden blue-gradient-box">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div className="container px-4 sm:px-6 py-20 sm:py-28 md:py-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6">
              About Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Your Bridge to{" "}
              <span className="gradient-text">World-Class Healthcare</span>{" "}
              in India
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Healthroop is a global medical tourism platform dedicated to
              connecting international patients with India's leading hospitals,
              highly qualified specialists, and advanced healthcare facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 block">
                Our Mission
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-5 leading-tight">
                Making Quality Healthcare{" "}
                <span className="gradient-text">Accessible & Affordable</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                Our goal is to make high-quality medical care accessible,
                affordable, and seamless for patients seeking treatment beyond
                their home countries.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                At Healthroop, we understand that traveling abroad for medical
                treatment can be overwhelming. That is why we provide end-to-end
                support throughout the entire patient journey — from selecting the
                right hospital and specialist to coordinating appointments,
                reviewing medical reports, assisting with medical visas, travel
                arrangements, translators, accommodation, and on-ground patient
                care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">Trusted Institutions</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">JCI & NABH accredited hospitals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">Expert Specialists</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">Internationally experienced doctors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">Personalized Care</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">Focused on safety, trust & recovery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 blue-gradient-box">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/90 border border-primary/10 rounded-2xl p-6 sm:p-7 text-center hover-lift group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 block">
              Our Promise
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-6">
              A Reliable Bridge to{" "}
              <span className="gradient-text">India's Healthcare</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
              We collaborate with trusted healthcare institutions and
              internationally experienced doctors to ensure patients receive
              world-class treatment combined with personalized care and
              transparency. Our team is committed to guiding patients and their
              families at every step, ensuring a smooth and comfortable
              experience focused on safety, trust, and recovery.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              With a growing international network and a patient-centric
              approach, Healthroop strives to be a reliable bridge between global
              patients and India's world-class healthcare system, enabling
              individuals to access the treatment they need with confidence and
              peace of mind.
            </p>
            <Link
              to="/#contact-us"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;
