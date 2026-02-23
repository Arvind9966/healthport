import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav_hospitals"), href: "#hospitals" },
    { label: t("nav_specialties"), href: "#specialties" },
    { label: t("nav_howItWorks"), href: "#how-it-works" },
    { label: t("nav_testimonials"), href: "#testimonials" },
    { label: t("nav_contactUs"), href: "#contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center overflow-hidden">
          <img src={logo} alt="HealthPort" className="h-44 w-auto -mb-20 -mt-12 object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/join-as-partner"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
          >
            {t("nav_joinPartner")}
          </Link>
          <LanguageSelector />
        </nav>

        <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
          {t("nav_getStarted")} <ArrowRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
