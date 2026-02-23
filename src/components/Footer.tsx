import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Social & App Links */}
      <div className="container px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Follow us on</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4 text-primary-foreground" />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
              <Twitter className="w-4 h-4 text-primary-foreground" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
              <Linkedin className="w-4 h-4 text-primary-foreground" />
            </a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Download HealthPort App
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-3">
        <p className="text-center text-sm text-primary-foreground">
          2026, HealthPort.com All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
