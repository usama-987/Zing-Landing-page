import React from "react";

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
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          className="bg-white p-8 md:p-12 rounded-2xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,190,210,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,190,210,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-950 leading-[1.08] tracking-tight">
            How We Work
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-xs">
            A clear process for building software and scaling growth.
          </p>
          <button className="w-fit mt-2 bg-gray-950 text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-lg">
            Get a free AI & growth audit
          </button>
        </div>

        {/* Right — 2×2 card grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {steps.map(({ num, title, desc, variant }) => (
            <div
              key={num}
              className="rounded-2xl p-5 flex flex-col gap-2 min-h-[180px]"
              style={{ background: cardBg[variant] }}
            >
              {/* Number badge */}
              <span className="self-start text-xs font-semibold text-slate-500 bg-white/60 backdrop-blur-sm px-2.5 py-1 rounded-lg mb-2">
                {num}
              </span>
              <p className="text-base font-bold text-gray-900">{title}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
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
