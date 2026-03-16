import { Facebook, Instagram, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container px-4 xs:px-5 sm:px-6 py-6 xs:py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 xs:gap-5 border-t border-border">
        <div className="text-center sm:text-left">
          <p className="text-[10px] xs:text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2 xs:mb-3">{t("footer_followUs")}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2 xs:gap-2.5">
            <a href="https://wa.me/919602362831" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 xs:w-10 xs:h-10 bg-primary/10 hover:bg-[#25D366] text-primary hover:text-primary-foreground rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 xs:w-4 xs:h-4" fill="currentColor">
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.905 15.905 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.314 22.588c-.392 1.1-1.94 2.014-3.182 2.28-.848.18-1.956.324-5.684-1.222-4.772-1.976-7.836-6.82-8.074-7.138-.228-.318-1.918-2.554-1.918-4.872s1.214-3.456 1.644-3.928c.43-.472.94-.59 1.254-.59.314 0 .628.002.902.016.29.014.678-.11.96.732.294.872 1.008 2.992 1.096 3.21.088.218.148.472.028.762-.118.29-.178.472-.356.726-.178.254-.374.568-.534.762-.178.216-.364.45-.156.882.208.43.924 1.528 1.984 2.476 1.364 1.22 2.514 1.598 2.87 1.776.356.178.564.148.772-.09.208-.236.892-1.038 1.13-1.394.236-.356.472-.296.798-.178.326.118 2.064.974 2.418 1.152.356.178.592.266.68.414.086.148.086.862-.306 1.962z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583658533918" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 xs:w-10 xs:h-10 bg-primary/10 hover:bg-[#1877F2] text-primary hover:text-primary-foreground rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Facebook className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </a>
            <a href="https://www.instagram.com/healthroop?igsh=MXRpaXpoYWdubWMwMA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 xs:w-10 xs:h-10 bg-primary/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] text-primary hover:text-primary-foreground rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Instagram className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </a>
            <a href="mailto:healthroop@gmail.com" aria-label="Email" className="w-8 h-8 xs:w-10 xs:h-10 bg-primary/10 hover:bg-[#EA4335] text-primary hover:text-primary-foreground rounded-lg xs:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
            </a>
          </div>
        </div>
        <p className="text-xs xs:text-sm text-muted-foreground font-medium">{t("footer_downloadApp")}</p>
      </div>

      <div className="bg-primary py-3 xs:py-4">
        <p className="text-center text-[10px] xs:text-xs sm:text-sm text-primary-foreground font-medium tracking-wide px-4">
          {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
