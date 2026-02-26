import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import GlobalSearch from "./GlobalSearch";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t("nav_hospitals"), href: "/hospitals", isRoute: true },
    { label: t("nav_specialties"), href: "/#specialties" },
    { label: t("nav_howItWorks"), href: "/#how-it-works" },
    { label: t("nav_contactUs"), href: "/#contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="container flex items-center justify-between h-14 xs:h-16 sm:h-18 md:h-20 lg:h-22 px-3 xs:px-4 sm:px-5 md:px-6">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center">
          <img src={logo} alt="HealthPort" className="h-44 xs:h-48 sm:h-52 md:h-56 lg:h-64 xl:h-72 w-auto object-contain -my-14 xs:-my-16 sm:-my-18 md:-my-20 lg:-my-24 xl:-my-28" />
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm xl:text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            to="/join-as-partner"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
          >
            {t("nav_joinPartner")}
          </Link>
          <LanguageSelector />
          <GlobalSearch />
        </nav>

        {/* Mobile search + menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <GlobalSearch />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-xl hover:bg-muted transition-all duration-200 hover:scale-110 active:scale-95">
                <Menu className="w-5 h-5 text-foreground transition-transform duration-200" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] pt-14 px-5 bg-background/95 backdrop-blur-xl rounded-l-3xl border-l border-border/30 shadow-2xl">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-2 mt-2">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3.5 px-5 rounded-2xl border border-transparent hover:border-primary/10 hover:shadow-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200 py-3.5 px-5 rounded-2xl border border-transparent hover:border-primary/10 hover:shadow-sm"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <div className="my-2 h-px bg-border/40 mx-3" />
                <Link
                  to="/join-as-partner"
                  onClick={() => setOpen(false)}
                  className="text-base font-semibold text-primary hover:bg-primary/5 transition-all duration-200 py-3.5 px-5 rounded-2xl border border-primary/15 hover:border-primary/30 hover:shadow-sm"
                >
                  {t("nav_joinPartner")}
                </Link>
                <div className="py-3 px-5 mt-1">
                  <LanguageSelector />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
