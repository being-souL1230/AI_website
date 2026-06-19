import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppBtn.css";

interface WhatsAppBtnProps {
  href: string;
}

export default function WhatsAppBtn({ href }: WhatsAppBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-submit"
    >
      <FaWhatsapp className="wa-icon" />
      <span className="wa-text">WhatsApp Now</span>
    </a>
  );
}
