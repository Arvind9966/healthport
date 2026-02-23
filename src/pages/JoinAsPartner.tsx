import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Terms required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container px-6 max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-center mb-4 text-foreground">
            Welcome to HealthPort Partnership Registration!
          </h1>

          <div className="mt-10 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-muted-foreground text-lg mb-8">
              Create an account to become our partner
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Partner Type */}
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="partnerType"
                    checked={partnerType === "individual"}
                    onChange={() => setPartnerType("individual")}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-foreground">Individual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="partnerType"
                    checked={partnerType === "corporate"}
                    onChange={() => setPartnerType("corporate")}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-foreground">Corporate</span>
                </label>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">
                  Full Name<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  maxLength={100}
                  required
                  className="bg-background"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label className="text-foreground">
                  Phone Number<span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-3">
                  <Select value={phoneCode} onValueChange={setPhoneCode}>
                    <SelectTrigger className="w-28 bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {phoneCodes.map((pc) => (
                        <SelectItem key={pc.code} value={pc.code}>
                          {pc.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                    maxLength={15}
                    required
                    className="flex-1 bg-background"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address<span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={255}
                    required
                    className="bg-background pr-10"
                  />
                  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label className="text-foreground">
                  Country<span className="text-destructive">*</span>
                </Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(v) => setAgreeTerms(v === true)}
                  />
                  <label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
                    I agree to the terms and conditions<span className="text-destructive">*</span>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="download"
                    checked={agreeDownload}
                    onCheckedChange={(v) => setAgreeDownload(v === true)}
                  />
                  <label htmlFor="download" className="text-sm text-primary underline cursor-pointer">
                    Download the Agreement
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Next <ArrowRight className="w-5 h-5" />
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
