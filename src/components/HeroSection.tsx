import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import heroClip1 from "@/assets/hero-clip-1.mp4";
import heroClip2 from "@/assets/hero-clip-2.mp4";
import heroClip3 from "@/assets/hero-clip-3.mp4";
import heroClip4 from "@/assets/hero-clip-4.mp4";
import { useLanguage } from "@/i18n/LanguageContext";

const heroVideos = [heroClip1, heroClip2, heroClip3, heroClip4];
const CLIP_DURATION = 3000;

const HeroSection = () => {
  const { t } = useLanguage();
  const badges = [t("hero_badge1"), t("hero_badge2"), t("hero_badge3"), t("hero_badge4")];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const advanceClip = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    if (loadedCount < heroVideos.length) return;
    const interval = setInterval(advanceClip, CLIP_DURATION);
    return () => clearInterval(interval);
  }, [advanceClip, loadedCount]);

  // Play/pause videos based on current index
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const handleVideoLoaded = () => {
    setLoadedCount((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-[85vh] xs:min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* All videos rendered simultaneously, opacity controls visibility */}
      <div className="absolute inset-0 z-0">
        {heroVideos.map((src, i) => (
          <video
            key={i}
            ref={(el) => { videoRefs.current[i] = el; }}
            autoPlay={i === 0}
            loop
            muted
            playsInline
            preload="auto"
            onCanPlayThrough={handleVideoLoaded}
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === currentIndex ? 1 : 0 }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
      </div>

      <div className="container px-4 xs:px-5 sm:px-6 text-center relative z-20 py-12 xs:py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 text-xs xs:text-sm sm:text-base md:text-lg mb-3 xs:mb-4 sm:mb-6 tracking-wider uppercase font-light"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-5xl mx-auto mb-5 xs:mb-6 sm:mb-8 text-white drop-shadow-lg"
        >
          {t("hero_title")}
          <span className="text-primary drop-shadow-lg">{t("hero_titleHighlight")}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-white/70 mb-6 xs:mb-8 sm:mb-12"
        >
          {badges.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
              {i > 0 && <span className="text-white/30 hidden xs:inline">•</span>}
              <span className="backdrop-blur-sm bg-white/5 px-2 xs:px-3 py-1 rounded-full border border-white/10">{item}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 xs:gap-3 sm:gap-4"
        >
          <button className="w-full sm:w-auto bg-primary text-primary-foreground px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full text-sm xs:text-base font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]">
            {t("hero_cta1")} <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full text-sm xs:text-base font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/40">
            {t("hero_cta2")} <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
