import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = ["Hospitals", "Specialties", "How It Works", "Testimonials", "Contact Us"];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">H</span>
          </div>
          <span className="text-lg font-semibold">
            Health<span className="text-primary">Port</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <Link
            to="/join-as-partner"
            className="text-sm text-primary font-medium hover:opacity-80 transition-opacity"
          >
            Join as a Partner
          </Link>
        </nav>

        <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
