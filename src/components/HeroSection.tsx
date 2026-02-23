import { ArrowRight, ExternalLink } from "lucide-react";
import Antigravity from "./Antigravity";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0">
        <Antigravity
          count={300}
          magnetRadius={30}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.08}
          color="#1E9BF0"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="container px-6 text-center relative z-10">
        <p className="text-muted-foreground text-lg mb-6">
          Navigating healthcare across borders shouldn't be stressful.
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-8">
          Your trusted partner for seamless medical travel{" "}
          <span className="text-primary">from consultation to recovery.</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
          {["Verified Doctors & Hospitals", "Clear Cost Breakdowns", "Visa & Travel Coordination", "24/7 Patient Support"].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-4">
                {i > 0 && <span className="text-border">|</span>}
                {item}
              </span>
            )
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-border px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-muted transition-colors">
            Talk to an Expert <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
