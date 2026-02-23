import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HospitalNetwork from "@/components/HospitalNetwork";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FeaturesSection from "@/components/FeaturesSection";
import SavingsSection from "@/components/SavingsSection";
import PricingSection from "@/components/PricingSection";
import JourneySteps from "@/components/JourneySteps";
import ZeroFeesSection from "@/components/ZeroFeesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HospitalNetwork />
      <SpecialtiesSection />
      <FeaturesSection />
      <SavingsSection />
      <PricingSection />
      <JourneySteps />
      <ZeroFeesSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
