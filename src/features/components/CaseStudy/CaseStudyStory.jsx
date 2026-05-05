import  { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import ColonIcon from "../../../assets/CaseStudy1/Colon.svg";

function useStatsVisible() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

// Extract numeric part and prefix/suffix for animation
function parseValue(value) {
  const match = value.match(/^([^0-9]*)([0-9,]+)([^0-9]*)$/);
  if (!match) return { prefix: "", number: null, suffix: value };
  const num = parseInt(match[2].replace(/,/g, ""), 10);
  return { prefix: match[1], number: num, suffix: match[3] };
}

function AnimatedStat({ value, run }) {
  const { prefix, number, suffix } = parseValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run || number === null) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(number / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= number) { setCount(number); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [run, number]);

  if (number === null) return <span>{value}</span>;

  // Format with commas if original had commas
  const formatted = value.includes(",")
    ? count.toLocaleString()
    : count.toString();

  return <span>{prefix}{formatted}{suffix}</span>;
}

const CaseStudyStory = ({
  heading = "",
  blockquote = "",
  quotes = [],
  stats = [],
}) => {
  const { ref, visible } = useScrollAnimation();
  const { ref: statsRef, visible: statsVisible } = useStatsVisible();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F0F10] leading-tight mb-8 max-w-md">
            {heading}
          </h2>

          {/* Blockquote */}
          {blockquote && (
            <div className="border-l-4 border-[#2862E3] pl-5 mb-8 max-w-5xl">
              <p
                className="text-sm sm:text-base text-[#656565] max-w-3xl"
                dangerouslySetInnerHTML={{ __html: blockquote }}
              />
            </div>
          )}

          {/* Quotes */}
          <div className="space-y-6 mb-10">
            {quotes.map((q, i) => (
              <div key={i}>
                <img src={ColonIcon} alt="quote" className="w-8 h-8 mb-2" />
                <p className="text-xs sm:text-sm text-[#656565] max-w-3xl">
                  {q}
                </p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          {stats.length > 0 && (
            <div
              ref={statsRef}
              className="bg-[#1C1C1E] rounded-lg px-8 py-8 grid grid-cols-1 sm:grid-cols-3"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-6 py-2">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFFFFF] tabular-nums">
                    <AnimatedStat value={stat.value} run={statsVisible} />
                  </p>
                  <p className="text-xs sm:text-sm text-[#FFFFFF] mt-2 leading-snug mx-auto">
                    {stat.label}
                    {stat.sublabel && (
                      <span className="block">{stat.sublabel}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyStory;