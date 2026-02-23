const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-16 md:py-20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">H</span>
            </div>
            <span className="text-sm font-semibold text-muted">
              Health<span className="text-primary">Port</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 HealthPort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
