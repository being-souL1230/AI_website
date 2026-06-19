import { ReactNode } from "react";
import { motion } from "framer-motion";
import "./MaskButton.css";

interface MaskButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function MaskButton({ children, onClick }: MaskButtonProps) {
  return (
    <motion.div
      className="mask-btn-outer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button className="mask-btn" type="button" onClick={onClick}>
        <span className="mask-btn-label">{children}</span>
      </button>
    </motion.div>
  );
}
