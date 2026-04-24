import { useState, useEffect } from "react";
import Trusted1 from "../../../assets/Trusted1.png";
import Trusted2 from "../../../assets/Truested2.png";
import Trusted3 from "../../../assets/Trusted3.png";
import Trusted4 from "../../../assets/Trusted4.png";
import Trusted5 from "../../../assets/Trusted5.png";
import Trusted6 from "../../../assets/Trusted6.png";
import Trusted7 from "../../../assets/Trusted7.png";
import HeroImage from "../../../assets/Hero.png";

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
    <div className="flex shrink-0 items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-white border border-gray-200 w-[120px] sm:w-[140px] md:w-[148px] h-[60px] sm:h-[68px] md:h-[72px]">
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
  const repeated = [...trustedBy, ...trustedBy];

  return (
    <div className="overflow-hidden px-3 sm:px-4 md:px-6 py-4 sm:py-[18px]">
      {/* Only the keyframe lives here — everything else is Tailwind */}
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <p className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
        {title}
      </p>

      <div className="overflow-hidden w-full">
        <div
          className="flex w-max gap-2 sm:gap-3 [animation:marquee-scroll_30s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {repeated.map((brand, index) => (
            <BrandCard key={`${brand.id}-${index}`} logo={brand.logo} alt={brand.alt} />
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
    <section className="w-full font-sans px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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
        <div className="relative z-10 flex min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
          {/* Text area */}
          <div
            className="transition-all duration-300 mb-8 sm:mb-10 md:mb-12"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight text-white">
              {current.title}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #60c8f0, #38e8d8)",
                }}
              >
                {current.highlightText}
              </span>
              ,<br />
              {current.plainText.replace(/^,\s*/, '')}
            </h1>

            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white">
              {current.description}
            </p>

            <button className="mt-4 sm:mt-6 rounded-full bg-white px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-900 transition-all duration-200 hover:bg-gray-100 active:scale-95">
              {current.cta}
            </button>
          </div>

          {/* Stats + Slide indicators */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-white">{stat.label}</p>
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
