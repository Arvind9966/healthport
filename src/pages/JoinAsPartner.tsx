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
      <section className="py-10 xs:py-12 sm:py-16 md:py-24 border-b border-border">
        <div className="container px-4 xs:px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
            <div>
              <p className="text-xs xs:text-sm text-muted-foreground mb-2">Home &gt; Join as a Partner</p>
              <h1 className="font-display text-2xl xs:text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mt-6 xs:mt-8 mb-3 xs:mb-4">
                Partner with HealthPort
              </h1>
              <h2 className="text-lg xs:text-xl md:text-2xl text-primary font-medium mb-4 xs:mb-6">
                Grow Your Medical Referral Business with a Trusted India Network
              </h2>
              <p className="text-muted-foreground text-sm xs:text-base mb-2 xs:mb-3">
                At HealthPort, we collaborate with medical tourism agents, visa consultants, and healthcare facilitators who want reliable hospital access, transparent pricing, and structured coordination.
              </p>
              <p className="text-muted-foreground text-sm xs:text-base mb-6 xs:mb-8">
                Together, we can create seamless patient experiences globally.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 xs:gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground px-6 xs:px-8 py-2.5 xs:py-3 rounded-full text-sm xs:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Join Now
                </button>
                <button className="border border-border px-6 xs:px-8 py-2.5 xs:py-3 rounded-full text-sm xs:text-base font-medium text-foreground hover:bg-muted transition-colors">
                  See how it works
                </button>
              </div>
            </div>
            <div className="rounded-2xl h-56 xs:h-64 sm:h-72 md:h-96 overflow-hidden">
              <img src={partnerHeroImg} alt="Healthcare partnership" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Shaping the Future */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-24">
        <div className="container px-4 xs:px-5 sm:px-6">
          <h2 className="font-display text-2xl xs:text-3xl md:text-4xl text-center mb-10 xs:mb-12 sm:mb-16 text-foreground">
            Shaping the future of <span className="text-primary">Health Travel</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-start">
            <div className="space-y-6 xs:space-y-8 sm:space-y-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 xs:gap-4 sm:gap-5">
                  <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base xs:text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-xs xs:text-sm font-medium text-foreground/80 mb-1.5 xs:mb-2">{f.subtitle}</p>
                    <p className="text-xs xs:text-sm text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl h-64 xs:h-72 sm:h-80 md:h-[28rem] overflow-hidden">
              <img src={partnerFeaturesImg} alt="Doctor consulting with patient" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-24 border-t border-border">
        <div className="container px-4 xs:px-5 sm:px-6">
          <h2 className="font-display text-2xl xs:text-3xl md:text-4xl text-center mb-10 xs:mb-12 sm:mb-16 text-foreground">
            How HealthPort <span className="text-primary">Works?</span>
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
            {howItWorks.map((item, i) => (
              <div key={i} className="bg-muted/50 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 text-center">
                <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-lg xs:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 xs:mb-4">
                  <item.icon className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-sm xs:text-base text-foreground mb-1.5 xs:mb-2">{item.title}</h3>
                <p className="text-xs xs:text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us CTA */}
      <section className="py-10 xs:py-12 sm:py-16 md:py-24 bg-primary">
        <div className="container px-4 xs:px-5 sm:px-6 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl xs:text-3xl md:text-4xl text-primary-foreground mb-4 xs:mb-6">{`Partner with us`}</h2>
          <p className="text-primary-foreground/90 text-sm xs:text-base sm:text-lg mb-6 xs:mb-8">
            Tap into a network of 1500+ medical centers and wellness retreats worldwide, with full concierge service at the destination to ensure the largest choice and best services for your customers. Launch your Health Travel business now!
          </p>
          <button
            onClick={scrollToForm}
            className="bg-primary-foreground text-primary px-8 xs:px-10 py-3 xs:py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-base xs:text-lg"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Registration Form */}
      <main id="registration-form" className="py-10 xs:py-12 sm:py-16 md:py-24">
        <div className="container px-4 xs:px-5 sm:px-6 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl xs:text-3xl md:text-4xl text-center mb-3 xs:mb-4 text-foreground">
            Welcome to HealthPort Partnership Registration!
          </h2>

          <div className="mt-8 xs:mt-10 bg-card border border-border rounded-xl xs:rounded-2xl p-5 xs:p-6 sm:p-8 md:p-10 shadow-sm">
            <p className="text-muted-foreground text-base xs:text-lg mb-6 xs:mb-8">
              Create an account to become our partner
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Partner Type */}
              <div className="flex items-center gap-4 xs:gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="partnerType" checked={partnerType === "individual"} onChange={() => setPartnerType("individual")} className="w-4 h-4 accent-primary" />
                  <span className="text-sm xs:text-base text-foreground">Individual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="partnerType" checked={partnerType === "corporate"} onChange={() => setPartnerType("corporate")} className="w-4 h-4 accent-primary" />
                  <span className="text-sm xs:text-base text-foreground">Corporate</span>
                </label>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5 xs:space-y-2">
                <Label htmlFor="fullName" className="text-sm xs:text-base text-foreground">Full Name<span className="text-destructive">*</span></Label>
                <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} maxLength={100} required className="bg-background text-sm xs:text-base" />
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5 xs:space-y-2">
                <Label className="text-sm xs:text-base text-foreground">Phone Number<span className="text-destructive">*</span></Label>
                <div className="flex gap-2 xs:gap-3">
                  <Select value={phoneCode} onValueChange={setPhoneCode}>
                    <SelectTrigger className="w-24 xs:w-28 bg-background text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {phoneCodes.map((pc) => (
                        <SelectItem key={pc.code} value={pc.code}>{pc.code}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))} maxLength={15} required className="flex-1 bg-background text-sm xs:text-base" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5 xs:space-y-2">
                <Label htmlFor="email" className="text-sm xs:text-base text-foreground">Email Address<span className="text-destructive">*</span></Label>
                <div className="relative">
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} required className="bg-background pr-10 text-sm xs:text-base" />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-1.5 xs:space-y-2">
                <Label className="text-sm xs:text-base text-foreground">Country<span className="text-destructive">*</span></Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="bg-background text-sm xs:text-base"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2.5 xs:space-y-3 pt-1 xs:pt-2">
                <div className="flex items-center gap-2.5 xs:gap-3">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={(v) => setAgreeTerms(v === true)} />
                  <label htmlFor="terms" className="text-xs xs:text-sm text-foreground cursor-pointer">I agree to the terms and conditions<span className="text-destructive">*</span></label>
                </div>
                <div className="flex items-center gap-2.5 xs:gap-3">
                  <Checkbox id="download" checked={agreeDownload} onCheckedChange={(v) => setAgreeDownload(v === true)} />
                  <label htmlFor="download" className="text-xs xs:text-sm text-primary underline cursor-pointer">Download the Agreement</label>
                </div>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 xs:py-3.5 sm:py-4 rounded-lg font-medium text-base xs:text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Next <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
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
