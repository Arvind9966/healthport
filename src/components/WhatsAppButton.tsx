import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919602362831"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 xs:bottom-6 xs:right-6 z-50 w-14 h-14 xs:w-16 xs:h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full rounded-full shadow-lg" />
    </a>
  );
};

export default WhatsAppButton;
