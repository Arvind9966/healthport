import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

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


        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <MoreVertical className="w-6 h-6 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] pt-12">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/join-as-partner"
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-primary hover:text-primary/80 transition-colors duration-200 py-2"
              >
                {t("nav_joinPartner")}
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
