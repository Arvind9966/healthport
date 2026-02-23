import { ArrowRight, ExternalLink } from "lucide-react";
import heroBgVideo from "@/assets/hero-bg-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container px-6 text-center relative z-10">
        <p className="text-white/90 text-lg mb-6 drop-shadow-md">
          Navigating healthcare across borders shouldn't be stressful.
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-8 text-white drop-shadow-lg">
          Your trusted partner for seamless medical travel{" "}
          <span className="text-primary drop-shadow-lg">from consultation to recovery.</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80 mb-10 drop-shadow-md">
          {["Verified Doctors & Hospitals", "Clear Cost Breakdowns", "Visa & Travel Coordination", "24/7 Patient Support"].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-4">
                {i > 0 && <span className="text-white/40">|</span>}
                {item}
              </span>
            )
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-colors backdrop-blur-sm">
            Talk to an Expert <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
