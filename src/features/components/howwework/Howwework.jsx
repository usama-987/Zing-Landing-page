
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { scrollToContact } from "../../../hooks/scrollToContact";

const steps = [
  { num: "01", title: "Audit",  desc: "We identify bottlenecks across ads, ecommerce, and operations", variant: "light" },
  { num: "02", title: "Design", desc: "We map AI systems, funnels, and infrastructure",                variant: "blue"  },
  { num: "03", title: "Build",  desc: "We implement AI, marketing systems, and software",             variant: "light" },
  { num: "04", title: "Scale",  desc: "We optimize and double down on what works",                    variant: "blue"  },
];

const noiseUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.13'/%3E%3C/svg%3E")`;

const cardBg = {
  light: `${noiseUrl}, linear-gradient(145deg, #f5f7fa 0%, #dde6f0 60%, #ccdaea 100%)`,
  blue:  `${noiseUrl}, linear-gradient(145deg, #dce8f5 0%, #c4d8ec 40%, #b8cfe8 100%)`,
};

const HowWeWork = () => {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-6 sm:p-8 md:p-12 rounded-2xl pre-animate${visible ? " animate-slide-in-left" : ""}`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,190,210,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,190,210,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">

        {/* Left */}
        <div className="flex flex-col gap-4 mt-0 md:mt-4 lg:mt-30">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-[#0F0F10] leading-[1.08] tracking-tight">
            How We Work
          </h2>
          <p className="text-sm sm:text-base text-[#656565] font-normal leading-relaxed max-w-xs">
            A clear process for building software and scaling growth.
          </p>
          <button onClick={scrollToContact} className="w-fit mt-2 bg-[#1C1C1E] text-[#FFFFFF] text-xs font-normal uppercase tracking-widest px-5 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200">
            Get a free AI & growth audit
          </button>
        </div>

        {/* Right — 2×2 card grid */}
        <div className="grid grid-cols-2 gap-3">
          {steps.map(({ num, title, desc, variant }) => (
            <div
              key={num}
              className="rounded-2xl p-4 sm:p-5 flex flex-col gap-2 min-h-[120px] sm:min-h-[140px] hover-popup cursor-pointer"
              style={{ background: cardBg[variant] }}
            >
              <span className="self-start text-xs font-normal text-[#3E3E3E] bg-[#FFFFFF] backdrop-blur-sm px-2.5 py-1 rounded-lg mb-1">
                {num}
              </span>
              <p className="text-sm sm:text-base font-medium text-[#0A0028]">{title}</p>
              <p className="text-xs sm:text-sm text-[#6C6C6C] font-normal leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;