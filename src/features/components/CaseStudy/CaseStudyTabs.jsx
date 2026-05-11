import { useState } from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const CaseStudyTabs = ({ tabs = [] }) => {
  const [active, setActive] = useState(0);
  const { ref, visible } = useScrollAnimation();

  const current = tabs[active];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className="bg-[#ffffff] p-8 md:p-10"
          style={{
            transform: visible ? 'scale(1)' : 'scale(0.95)',
            WebkitTransform: visible ? 'scale(1)' : 'scale(0.95)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.6s ease-out',
            WebkitTransition: 'all 0.6s ease-out',
          }}
        >
          {/* Tab Nav */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-start gap-2 font-medium transition-colors w-full cursor-pointer"
              >
                <span
                  className={`block w-full h-[2px] ${
                    active === i ? "bg-gray-900" : "bg-gray-200"
                  }`}
                />
                <span className={`text-[10px] sm:text-xs md:text-sm text-left leading-tight ${
                  active === i ? "text-gray-900" : "text-gray-400"
                }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#000000] mb-4">
                {current.label}
              </h2>
              <div
                className="text-sm text-gray-900 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: current.content }}
              />
            </div>

            {/* Right — image */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center w-full"
                style={{
                  backgroundImage: `url(${current.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  maxWidth: "420px",
                  height: "260px",
                }}
              >
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-4/5 h-4/5 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTabs;
