import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./SocialIconSlide.css";

export default function SocialIconSlide() {
  return (
    <div className="social-slide-icons">
      {/* LinkedIn */}
      <div className="social-slide-container">
        <div className="social-slide-icon-rest">
          <FaLinkedinIn />
        </div>
        <div className="social-slide-icon-hover linkedin">
          <FaLinkedinIn className="slide-icon" />
        </div>
      </div>

      {/* Instagram */}
      <div className="social-slide-container">
        <div className="social-slide-icon-rest">
          <FaInstagram />
        </div>
        <div className="social-slide-icon-hover instagram">
          <FaInstagram className="slide-icon" />
        </div>
      </div>
    </div>
  );
}
