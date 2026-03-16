import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [procedure, setProcedure] = useState("");
  const [conditionDetails, setConditionDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      toast({ title: "Missing fields", description: "Please fill in your name and email.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim() || null,
        procedure: procedure || null,
        condition_details: conditionDetails.trim() || null,
      });
      if (error) throw error;
      toast({ title: "Inquiry submitted!", description: "We'll get back to you soon." });
      setFullName("");
      setEmail("");
      setPhone("");
      setProcedure("");
      setConditionDetails("");
    } catch (err) {
      console.error("Contact form error:", err);
      toast({ title: "Submission failed", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-2 xs:py-3 sm:py-4 md:py-5 scroll-mt-24" id="contact-us">
      <div className="container px-4 xs:px-5 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl mb-3">
            {t("contact_title")}<span className="gradient-text">{t("contact_titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-xs xs:text-sm sm:text-base mb-6 xs:mb-8 sm:mb-10 max-w-lg mx-auto">{t("contact_subtitle")}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-2xl mx-auto blue-gradient-box border border-primary/10 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-8 space-y-3 xs:space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4">
            <input
              type="text"
              placeholder={t("contact_fullName")}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-card border border-border rounded-lg xs:rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            <div className="relative">
              <input
                type="email"
                placeholder={t("contact_email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-card border border-border rounded-lg xs:rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 text-primary" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4">
            <input
              type="tel"
              placeholder={t("contact_phone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-card border border-border rounded-lg xs:rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
            <select
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="bg-card border border-border rounded-lg xs:rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            >
              <option value="">{t("contact_selectProcedure")}</option>
              <option>Dentistry</option>
              <option>Hair Transplantation</option>
              <option>Cosmetic Surgery</option>
              <option>Orthopedic Surgery</option>
              <option>IVF & Fertility</option>
              <option>Heart Care</option>
              <option>Neurology</option>
              <option>Eye/Lasik Care</option>
              <option>ENT</option>
            </select>
          </div>
          <textarea
            rows={4}
            placeholder={t("contact_condition")}
            value={conditionDetails}
            onChange={(e) => setConditionDetails(e.target.value)}
            className="w-full bg-card border border-border rounded-lg xs:rounded-xl px-3 xs:px-4 py-2.5 xs:py-3 text-xs xs:text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground py-3 xs:py-3.5 sm:py-4 rounded-lg xs:rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.99] disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : t("contact_submit")} {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
