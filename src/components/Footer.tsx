import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted py-16 md:py-20">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={logo} alt="HealthPort" className="h-10 w-auto brightness-0 invert" />
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
