import { ReactNode } from "react";
import "./GlowButton.css";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function GlowButton({ children, onClick, className = "", type = "button" }: GlowButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`glow-btn ${className}`}
    >
      {children}
    </button>
  );
}
