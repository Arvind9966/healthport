import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Social & Download */}
      <div className="container px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Follow us on</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
        <p className="text-sm text-muted-foreground font-medium">
          Download HealthPort App
        </p>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-3.5">
        <p className="text-center text-sm text-primary-foreground font-medium tracking-wide">
          © 2026, HealthPort.com All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
