import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, CheckCircle2, ChevronRight, Star, 
  Sparkles, Clock, FileText, ShieldCheck, Zap,
  Users, PenTool, Images
} from "lucide-react";
import TiltedCard from "@/components/TiltedCard";
import FrameButton from "@/components/FrameButton";
import GlowButton from "@/components/GlowButton";
import MaskButton from "@/components/MaskButton";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import SocialIconSlide from "@/components/SocialIconSlide";
import "@/components/StrokeText.css";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ashyLogo from "@assets/WhatsApp_Image_2026-06-13_at_12.56.57_1781335867349.jpeg";
import resumeFlyer from "@assets/WhatsApp_Image_2026-06-13_at_12.58.09_1781335867351.jpeg";
import pptFlyer from "@assets/WhatsApp_Image_2026-06-13_at_12.56.47_1781335867352.jpeg";
import Lightfall from "@/components/Lightfall";
import SpotlightCard from "@/components/SpotlightCard";
import DotGrid from "@/components/DotGrid";
import ShapeGrid from "@/components/ShapeGrid";

const WHATSAPP_NUMBER = "918383861855";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <USPSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={ashyLogo} alt="AshY Creations Logo" className="w-10 h-10 rounded-full" />
          <span className="font-display font-bold text-xl tracking-tight">AshY Creations</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 font-medium text-sm transition-all duration-300"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass-nav border-t border-white/5 p-4 flex flex-col gap-4 shadow-xl md:hidden"
        >
          {["Home", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="text-base font-medium p-3 hover:bg-white/5 rounded-lg transition-colors text-left"
              onClick={() => { scrollToSection(item.toLowerCase()); setIsMobileMenuOpen(false); }}
            >
              {item}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-medium transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Lightfall WebGL background */}
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#08080F"
          speed={0.4}
          streakCount={5}
          streakWidth={0.8}
          streakLength={1.2}
          glow={0.85}
          density={0.5}
          twinkle={0.8}
          zoom={3}
          backgroundGlow={0.35}
          opacity={0.9}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={0.8}
          mouseDampening={0.2}
          mixBlendMode="screen"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-[#08080F]/50" />
      
      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8 group"
        >
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-primary to-secondary opacity-50 animate-pulse-glow" />
          <div className="absolute inset-[-10px] rounded-full border border-primary/30 animate-spin-slow" />
          <img src={ashyLogo} alt="AshY Creations" className="w-24 h-24 md:w-32 md:h-32 rounded-full relative z-10 border border-white/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Ideas | Strategy | Growth
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6 max-w-4xl">
            <span className="stroke-text-wrap">AI-Powered<span className="stroke-text-fill">AI-Powered</span></span> <br className="hidden md:block" />
            <span className="gradient-text">Creative Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Resumes. Presentations. Brand Identity. All crafted with strategy. We turn your potential into undeniable impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <GlowButton onClick={() => scrollToSection("services")} className="w-full sm:w-auto">
            Explore Services <ChevronRight className="w-4 h-4" />
          </GlowButton>
          <FrameButton
            label="Meet the Team"
            hoverLabel="Our Story →"
            onClick={() => scrollToSection("about")}
            className="w-full sm:w-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 py-3 px-5 rounded-2xl bg-card border border-white/5 flex items-center gap-3 shadow-xl"
        >
          {[
            { icon: <Zap className="w-3.5 h-3.5 text-primary" />, text: "24-48hr Delivery" },
            { icon: <ShieldCheck className="w-3.5 h-3.5 text-primary" />, text: "ATS Friendly" },
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-primary" />, text: "Unlimited Revisions" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-1.5 text-sm font-medium ${i > 0 ? "pl-3 border-l border-white/10" : ""}`}>
              {item.icon}
              <span className="text-muted">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FlyersModal({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<number | null>(null);
  const flyers = [
    { img: resumeFlyer, label: "Resume & LinkedIn" },
    { img: pptFlyer, label: "Presentation Design" },
  ];
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9990] bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Glass modal card */}
      <div className="fixed inset-0 z-[9991] flex items-center justify-center p-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 28 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="pointer-events-auto w-full max-w-xl rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,175,55,0.10), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-display font-bold">Our Service Flyers</h3>
                <p className="text-muted text-xs mt-0.5">Hover to tilt · Click to enlarge</p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {flyers.map((f, i) => (
                <div
                  key={i}
                  className="cursor-zoom-in"
                  onClick={() => setActive(i)}
                >
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)",
                    }}
                  >
                    <TiltedCard
                      imageSrc={f.img}
                      altText={f.label}
                      captionText={f.label}
                      containerHeight="220px"
                      containerWidth="100%"
                      imageHeight="220px"
                      imageWidth="100%"
                      rotateAmplitude={10}
                      scaleOnHover={1.06}
                      showMobileWarning={false}
                      showTooltip={true}
                    />
                  </div>
                  <p className="text-center text-xs text-muted mt-2 font-medium">{f.label}</p>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-white text-sm text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp className="w-4 h-4" /> Order Now on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full-size lightbox — pt-20 pushes image below navbar */}
      <AnimatePresence>
        {active !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9992] bg-black/92 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <div className="fixed inset-0 z-[9993] flex items-center justify-center pt-20 px-6 pb-6 pointer-events-none">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="pointer-events-auto relative"
              >
                <img
                  src={flyers[active].img}
                  alt={flyers[active].label}
                  className="max-h-[calc(100vh-120px)] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute -top-3 -right-3 p-1.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors backdrop-blur-sm border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function FlyersButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center mb-14">
        <MaskButton onClick={() => setOpen(true)}>
          View Our Flyers
        </MaskButton>
      </div>

      <AnimatePresence>
        {open && <FlyersModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

const TIER_CARDS = [
  {
    category: "Resume & LinkedIn",
    categoryIcon: "resume",
    name: "Basic Resume",
    price: "199",
    features: ["1 Professional Resume", "Modern & Clean Design", "ATS Friendly", "Unlimited Revisions", "24-48 Hrs Delivery"],
    target: "Freshers",
    popular: false,
    electricColor: "#D4A843",
    spotlightColor: "rgba(212, 168, 67, 0.2)",
  },
  {
    category: "Resume & LinkedIn",
    categoryIcon: "resume",
    name: "Premium Resume",
    price: "399",
    features: ["ATS Optimized", "Keyword Targeted", "Modern Design", "Cover Letter (Optional)", "Unlimited Revisions", "24-48 Hrs Delivery"],
    target: "Experienced Professionals",
    popular: true,
    electricColor: "#D4A843",
    spotlightColor: "rgba(212, 168, 67, 0.2)",
  },
  {
    category: "Resume & LinkedIn",
    categoryIcon: "resume",
    name: "LinkedIn Setup",
    price: "499",
    features: ["Profile Optimization", "Headline & About", "Experience & Skills", "Banner & Photo Guidance", "SEO Friendly"],
    target: "Career Growth",
    popular: false,
    electricColor: "#D4A843",
    spotlightColor: "rgba(212, 168, 67, 0.2)",
  },
  {
    category: "Presentation Design",
    categoryIcon: "ppt",
    name: "School PPT",
    price: "299",
    features: ["Up to 10 Slides", "Clean & Simple Design", "Content + Design", "1 Revision", "24 Hrs Delivery"],
    target: "School Projects",
    popular: false,
    electricColor: "#E84C9B",
    spotlightColor: "rgba(232, 76, 155, 0.2)",
  },
  {
    category: "Presentation Design",
    categoryIcon: "ppt",
    name: "College PPT",
    price: "599",
    features: ["Up to 15 Slides", "Professional Design", "Researched Content", "2 Revisions", "24 Hrs Delivery"],
    target: "College Assignments",
    popular: false,
    electricColor: "#E84C9B",
    spotlightColor: "rgba(232, 76, 155, 0.2)",
  },
  {
    category: "Presentation Design",
    categoryIcon: "ppt",
    name: "Animated PPT",
    price: "999",
    features: ["Up to 20 Slides", "Premium Animated Design", "Custom Transitions", "Unlimited Revisions", "24 Hrs Delivery"],
    target: "Top Presentations",
    popular: true,
    electricColor: "#E84C9B",
    spotlightColor: "rgba(232, 76, 155, 0.2)",
  },
];

function TierCard({ category, categoryIcon, name, price, features, target, popular, electricColor, spotlightColor, index }: {
  category: string; categoryIcon: string; name: string; price: string; features: string[];
  target: string; popular: boolean; electricColor: string; spotlightColor: string; index: number;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    tiltRef.current.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)';
  };

  const icon = categoryIcon === "resume"
    ? <FileText className="w-3.5 h-3.5" style={{ color: electricColor }} />
    : <PenTool className="w-3.5 h-3.5" style={{ color: electricColor }} />;

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: '100%', transition: 'transform 0.25s ease', transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        <SpotlightCard className="flex flex-col h-full card-glass-hover" spotlightColor={spotlightColor}>
          <div className="p-6 flex flex-col h-full">
            {/* Category badge */}
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-4 self-start"
              style={{ background: `${electricColor}18`, color: electricColor, border: `1px solid ${electricColor}30` }}
            >
              {icon}
              {category}
            </div>

            {/* Name + Price */}
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-display font-bold leading-tight">{name}</h3>
              <div className="text-right shrink-0">
                <span className="text-2xl font-bold" style={{ color: electricColor }}>₹{price}</span>
              </div>
            </div>
            <p className="text-xs text-muted mb-5">Best for {target}</p>

            {/* Features */}
            <ul className="space-y-2 flex-1 mb-6">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: electricColor }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <WhatsAppBtn href={WHATSAPP_LINK} />
          </div>
        </SpotlightCard>
      </div>
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* DotGrid animated background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <DotGrid
          dotSize={5}
          gap={28}
          baseColor="#1e0a35"
          activeColor="#A855F7"
          proximity={120}
          shockRadius={220}
          shockStrength={4}
          returnDuration={1.5}
          speedTrigger={80}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <p className="text-muted max-w-2xl mx-auto">Expertly crafted solutions designed to elevate your career and presentations.</p>
        </div>

        <FlyersButton />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {TIER_CARDS.map((tier, i) => (
            <TierCard key={tier.name} {...tier} index={i} />
          ))}
        </div>

        {/* AI Solutions Coming Soon */}
        <motion.div
          className="max-w-sm mx-auto mt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.2)">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-accent/20 rounded-xl animate-ping" />
                <Sparkles className="w-6 h-6 text-accent relative z-10" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 bg-accent/10 text-accent border border-accent/30">
                <Sparkles className="w-3 h-3" /> AI Solutions
              </div>
              <h3 className="text-lg font-display font-bold mb-2">AI-Powered Services</h3>
              <p className="text-sm text-muted mb-4">AI content generation, AI-assisted branding, and custom chatbot setup.</p>
              <div className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-xs flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Coming Soon
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}

function USPSection() {
  const usps = [
    { icon: <ShieldCheck />, title: "ATS Friendly & Approved" },
    { icon: <PenTool />, title: "100% Customized Content" },
    { icon: <Clock />, title: "24-48 Hour Delivery" },
    { icon: <FileText />, title: "Plagiarism Free" },
    { icon: <Zap />, title: "Unlimited Revisions" },
    { icon: <Star />, title: "100% Satisfaction Guaranteed" },
  ];

  return (
    <section className="py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      {/* ShapeGrid animated background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid
          speed={0.4}
          squareSize={44}
          direction="diagonal"
          borderColor="rgba(168,85,247,0.10)"
          hoverFillColor="rgba(168,85,247,0.18)"
          shape="hexagon"
          hoverTrailAmount={4}
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Choose <span className="gradient-text">Us?</span></h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 max-w-4xl mx-auto">
          {[
            { label: "Delivery Time", value: "24-48hr" },
            { label: "Resumes Built", value: "500+" },
            { label: "PPTs Designed", value: "200+" },
            { label: "Revisions", value: "∞" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl bg-card border border-white/5 text-center flex flex-col justify-center shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-display">{stat.value}</div>
              <div className="text-sm text-muted font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usps.map((usp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-white/5"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {usp.icon}
              </div>
              <h4 className="font-semibold text-white/90">{usp.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About <span className="gradient-text">AshY Creations</span></h2>
          <p className="text-lg text-muted leading-relaxed">
            AshY Creations was born from the belief that every student and professional deserves a powerful personal brand — built with AI, delivered with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Anshi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-white/5 flex flex-col items-center text-center card-hover-effect"
          >
            <div className="w-32 h-32 rounded-full mb-6 p-1 bg-gradient-to-tr from-primary to-secondary">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-background">
                <span className="text-4xl font-display font-bold text-white/20">AD</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">Anshi Dixit</h3>
            <p className="text-primary font-medium text-sm mb-4">Co-Founder | Creative & Content Lead</p>
            <p className="text-muted mb-6">"Passionate about crafting compelling narratives that open doors and create opportunities."</p>
            <div className="mt-auto">
              <SocialIconSlide />
            </div>
          </motion.div>

          {/* Yash */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-white/5 flex flex-col items-center text-center card-hover-effect"
          >
            <div className="w-32 h-32 rounded-full mb-6 p-1 bg-gradient-to-tr from-primary to-secondary">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-background">
                <span className="text-4xl font-display font-bold text-white/20">YM</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">Yash Mishra</h3>
            <p className="text-secondary font-medium text-sm mb-4">Co-Founder | Strategy & Tech Lead</p>
            <p className="text-muted mb-6">"Merging technology and strategy to build career solutions that actually work in the real world."</p>
            <div className="mt-auto">
              <SocialIconSlide />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Rahul S.", city: "Mumbai", service: "Premium Resume", text: "Got shortlists within a week of using the new ATS optimized resume. The design is sleek and professional.", rating: 5 },
    { name: "Priya M.", city: "Delhi", service: "LinkedIn Setup", text: "My profile views jumped 300%. The team understood exactly how to position my experience for a career switch.", rating: 5 },
    { name: "Karan V.", city: "Bangalore", service: "Animated PPT", text: "Used their PPT service for a major pitch. The custom animations made complex data look incredibly engaging.", rating: 5 },
    { name: "Sneha K.", city: "Pune", service: "Basic Resume", text: "As a fresher, I was confused about what to include. They made my projects look like solid experience.", rating: 4 },
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold">What Our <span className="gradient-text">Clients Say</span></h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Duplicate for infinite scroll loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="min-w-[320px] md:min-w-[400px] p-6 rounded-2xl bg-card border border-white/5 shadow-lg flex flex-col shrink-0">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-muted/90 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="mt-auto">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-muted">{t.city} • {t.service}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const message = `Hi AshY Creations!%0A%0A*Name:* ${data.name}%0A*Interested In:* ${data.service}%0A*Message:* ${data.message}%0A%0AI would like to know more.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden relative">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to <span className="gradient-text">Stand Out?</span></h2>
              <p className="text-muted mb-8">Let AshY Creations craft your resume, LinkedIn, or presentation — designed to make you stand out.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <FaWhatsapp className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">WhatsApp Us</div>
                    <div className="font-bold">+91 83838 61855</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 md:p-8 border border-white/5 relative z-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input {...register("name")} placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <select {...register("service")} required className="w-full bg-[#1A0B0F] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-white/80 appearance-none">
                    <option value="" disabled selected>Service Interested In</option>
                    <option value="Basic Resume">Basic Resume</option>
                    <option value="Premium Resume">Premium Resume</option>
                    <option value="LinkedIn Setup">LinkedIn Setup</option>
                    <option value="School PPT">School PPT</option>
                    <option value="College PPT">College PPT</option>
                    <option value="Animated PPT">Animated PPT</option>
                    <option value="AI Solutions">AI Solutions</option>
                  </select>
                </div>
                <div>
                  <textarea {...register("message")} placeholder="Tell us what you need..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                  Send via WhatsApp <FaWhatsapp className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#080304] py-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ashyLogo} alt="Logo" className="w-8 h-8 rounded-full" />
              <span className="font-display font-bold text-xl">AshY Creations</span>
            </div>
            <p className="text-muted text-sm max-w-sm mb-6">
              Ideas | Strategy | Growth. Premium AI-powered digital services for ambitious professionals and students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted hover:text-white transition-colors"><FaLinkedinIn className="w-5 h-5" /></a>
              <a href={WHATSAPP_LINK} className="text-muted hover:text-green-500 transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white/90">Services</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>Resume Writing</li>
              <li>LinkedIn Optimization</li>
              <li>Presentation Design</li>
              <li>AI Solutions</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted/60">
          <p>© 2025 AshY Creations. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setMessage("");
    setOpen(false);
  };

  const handleTag = (tag: string) => {
    setMessage((prev) => (prev ? prev + " " + tag : tag));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="container_chat_bot">
              <div className="container-chat-options">
                <div className="chat">
                  <div className="chat-bot">
                    <textarea
                      id="chat_bot"
                      name="chat_bot"
                      placeholder="Imagine Something...✦˚"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                    />
                  </div>
                  <div className="options">
                    <div className="btns-add">
                      <button type="button" title="Attach">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8" />
                        </svg>
                      </button>
                      <button type="button" title="Grid">
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm0 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0-8h6m-3-3v6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" />
                        </svg>
                      </button>
                      <button type="button" title="Web">
                        <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.679-6.667" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <button className="btn-submit" type="button" onClick={handleSend}>
                      <i>
                        <svg viewBox="0 0 512 512" width="18" height="18">
                          <path fill="currentColor" d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13l137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57c3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05" />
                        </svg>
                      </i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tags">
                <span onClick={() => handleTag("Resume")}>Resume Help</span>
                <span onClick={() => handleTag("Presentation")}>PPT Design</span>
                <span onClick={() => handleTag("Pricing?")}>Pricing?</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] text-white"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="wa" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <FaWhatsapp className="w-7 h-7" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
