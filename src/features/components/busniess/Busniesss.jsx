import React from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const BusinessSection = () => {
  const { ref, visible } = useScrollAnimation();
  const points = [
    "Higher return on ad spend",
    "More revenue from the same traffic",
    "Faster execution across your team",
    "Less manual work and fewer bottlenecks",
    "Systems that scale without breaking",
  ];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
  ref={ref}
  className={`rounded-2xl p-8 md:p-12 relative overflow-hidden pre-animate${visible ? " animate-slide-in-left" : ""}`}
  style={{
    background: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E"),
      linear-gradient(150deg, #ffffff 0%, #dde6ef 40%, #b8c9d9 100%)
    `,
  }}
>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#1a1f24" }}>
              What this means for your business
            </h2>
            <button
              className="bg-[#1C1C1E] text-[#FFFFFF] text-xs px-5 py-2.5 rounded-lg font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-200"
            >
              GET STARTED
            </button>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Dashed vertical line — positioned at center of dots (dot is 13px wide, center = 6px) */}
            <div
              className="absolute top-2 bottom-2 pointer-events-none"
              style={{
                left: "6px",
                borderLeft: "1.5px dashed rgba(26,31,36,0.5)",
              }}
            />

            <ul className="space-y-5 sm:space-y-6">
              {points.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  {/* Dot — 13px so its center (6.5px ≈ 6px) aligns with the line */}
                  <div
                    className="rounded-full flex-shrink-0 relative z-10"
                    style={{ width: 13, height: 13, backgroundColor: "#1a1f24" }}
                  />
                  <p className="text-sm sm:text-base font-medium" style={{ color: "#1a1f24" }}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
