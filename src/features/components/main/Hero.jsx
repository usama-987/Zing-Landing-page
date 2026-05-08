import { useState, useEffect } from "react";
import { scrollToContact } from "../../../hooks/scrollToContact";
import Trusted1 from "../../../assets/Hero/Trusted1.svg";
import Trusted2 from "../../../assets/Hero/Trusted2.svg";
import Trusted3 from "../../../assets/Hero/Trusted3.svg";
import Trusted4 from "../../../assets/Hero/Trusted4.svg";
import Trusted5 from "../../../assets/Hero/Trusted5.svg";
import Trusted6 from "../../../assets/Hero/Trusted6.svg";
import Trusted7 from "../../../assets/Hero/Trusted7.svg";
import HeroImage from "../../../assets/Marketing/Hero1.png";

// ─── Default Props ───────────────────────────────────────────────────────────

const defaultSlides = [
  {
    id: 1,
    title: "Turn ",
    highlightText: "AI into revenue",
    plainText: ", not experiments",
    description:
      "We implement AI systems across your marketing, ecommerce, and operations increasing ad performance, automating workflows, and building the infrastructure needed to scale.",
    cta: "START GET A FREE AI & GROWTH AUDIT",
  },
  {
    id: 2,
    title: "Turn ",
    highlightText: "automation into growth",
    plainText: ", not overhead",
    description:
      "Our AI-powered pipelines reduce manual effort by 80%, letting your team focus on strategy while intelligent systems handle execution at scale.",
    cta: "BOOK A STRATEGY SESSION",
  },
  {
    id: 3,
    title: "Turn ",
    highlightText: "data into decisions",
    plainText: ", not guesswork",
    description:
      "Real-time insights, predictive models, and AI dashboards that turn raw numbers into clear actions — so every move you make is backed by intelligence.",
    cta: "SEE HOW IT WORKS",
  },
];

const defaultStats = [
  { value: "$XM+", label: "Revenue generated" },
  { value: "+100", label: "Companies supported" },
];

const defaultTrustedBy = [
  { id: 1, logo: Trusted1, alt: "Edible Landscapes" },
  { id: 2, logo: Trusted2, alt: "Authentic Detective" },
  { id: 3, logo: Trusted3, alt: "Boulee Ice" },
  { id: 4, logo: Trusted4, alt: "SVRY Nutrition" },
  { id: 5, logo: Trusted5, alt: "JM Packaging" },
  { id: 6, logo: Trusted6, alt: "Amanda Monroe" },
  { id: 7, logo: Trusted7, alt: "chkm8" },
];

// ─── Brand Card ──────────────────────────────────────────────────────────────

function BrandCard({ logo, alt }) {
  return (
    <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-white border-none w-[120px] sm:w-[140px] md:w-[148px] h-[60px] sm:h-[68px] md:h-[72px]">
      <img
        src={logo}
        alt={alt || "brand logo"}
        className="max-w-[90px] sm:max-w-[100px] md:max-w-[110px] max-h-[40px] sm:max-h-[45px] md:max-h-[50px] object-contain grayscale brightness-0"
      />
    </div>
  );
}

// ─── Trusted By Marquee ───────────────────────────────────────────────────────
function TrustedByMarquee({ trustedBy, title = "Trusted by" }) {
  // We use two sets. The goal is to slide the width of ONE set exactly.
  const repeated = [...trustedBy, ...trustedBy];
  const gap = 24; // Use a fixed pixel value for perfectly predictable math

  return (
    <div className="overflow-hidden px-3 sm:px-4 md:px-6 py-4 sm:py-[18px]">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          /* Move the distance of exactly half the container */
          100% { transform: translateX(calc(-50% - ${gap / 2}px)); }
        }

        .marquee-inner {
          display: flex;
          width: max-content;
          gap: ${gap}px;
          animation: marquee-scroll 30s linear infinite;
          /* Important: prevents 'shimmering' or sub-pixel snapping */
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>

      <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-medium text-[#0F0F10]">
        {title}
      </p>

      <div className="overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="marquee-inner hover:[animation-play-state:paused]">
          {repeated.map((brand, index) => (
            <div 
              key={`${brand.id}-${index}`} 
              className="flex-shrink-0 flex items-center justify-center"
            >
              <BrandCard logo={brand.logo} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function HeroSection({
  slides = defaultSlides,
  stats = defaultStats,
  trustedBy = defaultTrustedBy,
  autoPlayInterval = 4000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToSlide = (index) => {
    if (index === activeIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      goToSlide(next);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [activeIndex, slides.length, autoPlayInterval]);

  const current = slides[activeIndex];

  return (
    <section className="mt-7 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      {/* ── Hero Banner ── */}
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: '100% 100%',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[380px] sm:min-h-[400px] md:min-h-[420px] lg:min-h-[440px] flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
          {/* Text area — all slides rendered, only active visible, prevents height shift */}
          <div className="relative mb-8 sm:mb-10 md:mb-12">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="transition-all duration-300"
                style={{
                  opacity: i === activeIndex ? (animating ? 0 : 1) : 0,
                  transform: i === activeIndex && animating ? "translateY(10px)" : "translateY(0)",
                  position: i === activeIndex ? "relative" : "absolute",
                  top: 0, left: 0, right: 0,
                  pointerEvents: i === activeIndex ? "auto" : "none",
                }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-normal leading-tight text-[#FFFFFF]">
                  {slide.title}
                  <span className="bg-clip-text  font-normal text-[#51A2FF]">
                    {slide.highlightText}
                  </span>
                  ,<br />
                  {slide.plainText.replace(/^,\s*/, '')}
                </h1>
                <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base font-normal leading-relaxed text-[#FFFFFF]">
                  {slide.description}
                </p>
                <button onClick={scrollToContact} className="mt-4 sm:mt-6 rounded-lg bg-[#FFFFFF] px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 text-[10px] sm:text-xs font-normal uppercase tracking-wide text-[#1C1C1E] transition-all duration-200 hover:bg-blue-200 active:scale-95">
                  {slide.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Stats + Slide indicators */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFFFFF]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-[#FFFFFF]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: "3px",
                    width: i === activeIndex ? "32px" : "14px",
                    background:
                      i === activeIndex ? "#fff" : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Trusted By ── */}
      <div className="mx-auto max-w-400 py-8 sm:py-10 md:py-12">
        <TrustedByMarquee trustedBy={trustedBy} />
      </div>
    </section>
  );
}