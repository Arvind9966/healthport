import { Facebook, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container px-5 sm:px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-border">
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">{t("footer_followUs")}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-sm text-muted-foreground font-medium">{t("footer_downloadApp")}</p>
      </div>

      <div className="bg-primary py-4">
        <p className="text-center text-xs sm:text-sm text-primary-foreground font-medium tracking-wide">
          {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
