import { useEffect, useState } from "react";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const stats = [
  { raw: 1000, prefix: "$5 to $", suffix: "", label: "Scaled paid ads per month" },
  { raw: 88, prefix: "", suffix: "%", label: "Increased conversion rate" },
  { raw: 20, prefix: "", suffix: "+ h/week", label: "Save by building internal system" },
  { raw: 98, prefix: "", suffix: "%", label: "Improved ROAS" },
];

function CountUp({ target, prefix, suffix, run }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [run, target]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

const BusinessImpact = () => {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div ref={ref} className={`bg-black text-[#FFFFFF] p-8 md:p-12 rounded-2xl pre-animate${visible ? " animate-slide-in-left" : ""}`}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-12">
              What this means for your business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
              {stats.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold tabular-nums w-full text-center whitespace-nowrap">
                    <CountUp target={item.raw} prefix={item.prefix} suffix={item.suffix} run={visible} />
                  </h3>
                  <p className="text-[#BEBEBE] font-normal mt-2 text-xs lg:text-sm xl:text-base text-center leading-tight px-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;