import './FrameButton.css';

interface FrameButtonProps {
  label: string;
  hoverLabel?: string;
  onClick?: () => void;
  className?: string;
}

export default function FrameButton({ label, hoverLabel, onClick, className = '' }: FrameButtonProps) {
  return (
    <div className={`frame-btn-wrapper ${className}`} onClick={onClick}>
      <button className="frame-btn" type="button">
        <span className="frame-btn-frame">
          <span className="frame-btn-point top left" />
          <span className="frame-btn-point top right" />
          <span className="frame-btn-point bottom left" />
          <span className="frame-btn-point bottom right" />
        </span>
        <span className="frame-btn-txt-box">
          <span className="frame-btn-txt">{label}</span>
          <span className="frame-btn-txt">{hoverLabel ?? label}</span>
        </span>
      </button>
    </div>
  );
}
