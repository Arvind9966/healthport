import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Globe, Monitor, Megaphone, ClipboardCheck, GraduationCap, HeadphonesIcon, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import partnerHeroImg from "@/assets/partner-hero.jpg";
import partnerFeaturesImg from "@/assets/partner-features.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// ... keep existing code (countries and phoneCodes arrays)
const countries = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "UAE", "Saudi Arabia", "Singapore", "Malaysia",
  "Thailand", "Turkey", "South Korea", "Japan", "Brazil", "Mexico",
  "South Africa", "Nigeria", "Kenya", "Egypt", "Indonesia", "Philippines",
];

const phoneCodes = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+971", country: "AE" },
  { code: "+966", country: "SA" },
  { code: "+65", country: "SG" },
  { code: "+60", country: "MY" },
  { code: "+66", country: "TH" },
  { code: "+90", country: "TR" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
];

const features = [
  {
    icon: Monitor,
    title: "Digital Presence",
    subtitle: "Build Your Website in Just 5 Minutes with Our Partner App!",
    description: "Our intuitive app makes it easy for you to create a professional website with a multilingual white-label section for Medical, Wellness, or Cosmetic services — all in just 5 minutes.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    subtitle: "Expand Your Business with Our Multilingual White-Label Solution!",
    description: "Connect with over 1,000 hospitals worldwide and grow your network effortlessly. Our comprehensive solution is designed to bridge the gap between your services and a global audience.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    subtitle: "Boost Your Sales with Expert Marketing Support — No Legal Worries, Just Results!",
    description: "Stand out in the competitive health, wellness, and cosmetic industries. We'll design marketing materials tailored to your needs while ensuring full compliance with legal standards.",
  },
];

const howItWorks = [
  { icon: ClipboardCheck, title: "Onboarding", description: "We provide a comprehensive onboarding checklist to activate your HealthPort partnership." },
  { icon: GraduationCap, title: "Training", description: "Our training programs empower your team with essential training tools, setting you up for success." },
  { icon: HeadphonesIcon, title: "Support", description: "We offer dedicated support to new partners, building a comfortable and trusting relationship." },
  { icon: BarChart3, title: "Reporting", description: "Data, reports, and analytics are streamlined to ensure real-time, accurate, and consistent reporting." },
];

const JoinAsPartner = () => {
  const { toast } = useToast();
  const [partnerType, setPartnerType] = useState<"individual" | "corporate">("individual");
  const [fullName, setFullName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeDownload, setAgreeDownload] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (!agreeTerms) {
      toast({ title: "Terms required", description: "Please agree to the terms and conditions.", variant: "destructive" });
      return;
    }
    toast({ title: "Application submitted!", description: "We'll review your application and get back to you soon." });
  };

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-14 border-b border-border">
        <div className="container px-4 xs:px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xs:gap-6 sm:gap-8 items-center">
            <div>
              <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground mb-1.5 xs:mb-2">Home &gt; Join as a Partner</p>
              <h1 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mt-3 xs:mt-4 sm:mt-6 mb-2 xs:mb-3">
                Partner with HealthPort
              </h1>
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-medium mb-3 xs:mb-4">
                Grow Your Medical Referral Business with a Trusted India Network
              </h2>
              <p className="text-muted-foreground text-xs xs:text-sm sm:text-base mb-1.5 xs:mb-2">
                At HealthPort, we collaborate with medical tourism agents, visa consultants, and healthcare facilitators who want reliable hospital access, transparent pricing, and structured coordination.
              </p>
              <p className="text-muted-foreground text-xs xs:text-sm sm:text-base mb-4 xs:mb-5 sm:mb-6">
                Together, we can create seamless patient experiences globally.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-2 xs:gap-3">
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-xs xs:text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Join Now
                </button>
                <button className="border border-border px-5 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-xs xs:text-sm sm:text-base font-medium text-foreground hover:bg-muted transition-colors">
                  See how it works
                </button>
              </div>
            </div>
            <div className="rounded-xl xs:rounded-2xl h-44 xs:h-52 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
              <img src={partnerHeroImg} alt="Healthcare partnership" className="w-full h-full object-cover rounded-xl xs:rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Shaping the Future */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-14">
        <div className="container px-4 xs:px-5 sm:px-6">
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-6 xs:mb-8 sm:mb-10 text-foreground">
            Shaping the future of <span className="text-primary">Health Travel</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xs:gap-6 sm:gap-8 items-start">
            <div className="space-y-4 xs:space-y-5 sm:space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-2.5 xs:gap-3 sm:gap-4">
                  <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg xs:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-0.5 xs:mb-1">{f.title}</h3>
                    <p className="text-[11px] xs:text-xs sm:text-sm font-medium text-foreground/80 mb-1 xs:mb-1.5">{f.subtitle}</p>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl xs:rounded-2xl h-52 xs:h-60 sm:h-72 md:h-[26rem] overflow-hidden">
              <img src={partnerFeaturesImg} alt="Doctor consulting with patient" className="w-full h-full object-cover rounded-xl xs:rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-14 border-t border-border">
        <div className="container px-4 xs:px-5 sm:px-6">
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-6 xs:mb-8 sm:mb-10 text-foreground">
            How HealthPort <span className="text-primary">Works?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-5">
            {howItWorks.map((item, i) => (
              <div key={i} className="bg-muted/50 rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 text-center">
                <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg xs:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 xs:mb-3">
                  <item.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xs xs:text-sm sm:text-base text-foreground mb-1 xs:mb-1.5">{item.title}</h3>
                <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-6 xs:py-8 sm:py-10 md:py-14 bg-primary">
        <div className="container px-4 xs:px-5 sm:px-6 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-3 xs:mb-4">{`Partner with us`}</h2>
          <p className="text-primary-foreground/90 text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-5 sm:mb-6 leading-relaxed">
            Tap into a network of 1500+ medical centers and wellness retreats worldwide, with full concierge service at the destination to ensure the largest choice and best services for your customers. Launch your Health Travel business now!
          </p>
          <button
            onClick={scrollToForm}
            className="bg-primary-foreground text-primary px-6 xs:px-8 sm:px-10 py-2.5 xs:py-3 sm:py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-sm xs:text-base sm:text-lg"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Registration Form */}
      <main id="registration-form" className="py-6 xs:py-8 sm:py-10 md:py-14">
        <div className="container px-4 xs:px-5 sm:px-6 max-w-2xl mx-auto">
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center mb-2 xs:mb-3 text-foreground">
            Welcome to HealthPort Partnership Registration!
          </h2>

          <div className="mt-5 xs:mt-6 sm:mt-8 bg-card border border-border rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-sm">
            <p className="text-muted-foreground text-sm xs:text-base sm:text-lg mb-4 xs:mb-5 sm:mb-6">
              Create an account to become our partner
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-5">
              {/* Partner Type */}
              <div className="flex items-center gap-3 xs:gap-4 sm:gap-6">
                <label className="flex items-center gap-1.5 xs:gap-2 cursor-pointer">
                  <input type="radio" name="partnerType" checked={partnerType === "individual"} onChange={() => setPartnerType("individual")} className="w-3.5 h-3.5 xs:w-4 xs:h-4 accent-primary" />
                  <span className="text-xs xs:text-sm sm:text-base text-foreground">Individual</span>
                </label>
                <label className="flex items-center gap-1.5 xs:gap-2 cursor-pointer">
                  <input type="radio" name="partnerType" checked={partnerType === "corporate"} onChange={() => setPartnerType("corporate")} className="w-3.5 h-3.5 xs:w-4 xs:h-4 accent-primary" />
                  <span className="text-xs xs:text-sm sm:text-base text-foreground">Corporate</span>
                </label>
              </div>

              {/* Full Name */}
              <div className="space-y-1 xs:space-y-1.5">
                <Label htmlFor="fullName" className="text-xs xs:text-sm sm:text-base text-foreground">Full Name<span className="text-destructive">*</span></Label>
                <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} maxLength={100} required className="bg-background text-xs xs:text-sm sm:text-base h-9 xs:h-10 sm:h-11" />
              </div>

              {/* Phone Number */}
              <div className="space-y-1 xs:space-y-1.5">
                <Label className="text-xs xs:text-sm sm:text-base text-foreground">Phone Number<span className="text-destructive">*</span></Label>
                <div className="flex gap-2 xs:gap-2.5">
                  <Select value={phoneCode} onValueChange={setPhoneCode}>
                    <SelectTrigger className="w-20 xs:w-24 sm:w-28 bg-background text-xs xs:text-sm h-9 xs:h-10 sm:h-11"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {phoneCodes.map((pc) => (
                        <SelectItem key={pc.code} value={pc.code}>{pc.code}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} maxLength={15} required className="flex-1 bg-background text-xs xs:text-sm sm:text-base h-9 xs:h-10 sm:h-11" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1 xs:space-y-1.5">
                <Label htmlFor="email" className="text-xs xs:text-sm sm:text-base text-foreground">Email Address<span className="text-destructive">*</span></Label>
                <div className="relative">
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} required className="bg-background pr-9 text-xs xs:text-sm sm:text-base h-9 xs:h-10 sm:h-11" />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-1 xs:space-y-1.5">
                <Label className="text-xs xs:text-sm sm:text-base text-foreground">Country<span className="text-destructive">*</span></Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="bg-background text-xs xs:text-sm sm:text-base h-9 xs:h-10 sm:h-11"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2 xs:space-y-2.5 pt-1">
                <div className="flex items-center gap-2 xs:gap-2.5">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(v) => setAgreeTerms(v === true)} />
                  <label htmlFor="terms" className="text-[10px] xs:text-xs sm:text-sm text-foreground cursor-pointer">I agree to the terms and conditions<span className="text-destructive">*</span></label>
                </div>
                <div className="flex items-center gap-2 xs:gap-2.5">
                  <Checkbox id="download" checked={agreeDownload} onCheckedChange={(v) => setAgreeDownload(v === true)} />
                  <label htmlFor="download" className="text-[10px] xs:text-xs sm:text-sm text-primary underline cursor-pointer">Download the Agreement</label>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full bg-primary text-primary-foreground py-2.5 xs:py-3 sm:py-3.5 rounded-lg font-medium text-sm xs:text-base sm:text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinAsPartner;
