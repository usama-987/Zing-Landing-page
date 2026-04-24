import React from "react";
import containerBg from "../../../assets/Container.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";

const features = [
  {
    title: "AI Systems",
    desc: "We design and deploy AI-powered workflows, automation systems, and internal tools that eliminate bottlenecks and increase output.",
    btn: "GET STARTED",
    image: img1,
  },
  {
    title: "Paid Ads & Growth",
    desc: "We scale paid media with better creative testing, smarter targeting, and performance-driven optimization.",
    btn: "BOOST AD PERFORMANCE",
    image: img2,
  },
  {
    title: "Ecommerce & Conversion",
    desc: "We optimize storefronts, funnels, and offers to turn more traffic into revenue.",
    btn: "START YOUR OPTIMIZATION",
    image: img3,
  },
  {
    title: "Custom Software & Infrastructure",
    desc: "We build dashboards, platforms, and integrations that connect everything and support scale.",
    btn: "START SCALING TODAY",
    image: img4,
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 md:mb-16">
            Where AI actually <br /> drives results
          </h2>

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {features.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center`}
              >
                {/* TEXT */}
                <div className={`space-y-4 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.desc}</p>
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wide hover:bg-gray-800 transition-all duration-200">
                    {item.btn}
                  </button>
                </div>

                {/* IMAGE WITH BACKGROUND */}
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[350px]">
                    {/* Background Container Image */}
                    <img
                      src={containerBg}
                      alt="Container background"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    
                    {/* Feature Image */}
                    <div className="relative z-10 w-3/5 sm:w-1/2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-contain rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
