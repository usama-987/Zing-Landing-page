import React from "react";
import ServiceCard from "../ui/ServiceCard";
import AdobeIcon from "../../../assets/DevAug/Adobe.svg";
import FigmaIcon from "../../../assets/DevAug/Figma.svg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const Ui = () => {
  const { ref, visible } = useScrollAnimation();

  // ✅ Data
  const data = {
    centerText: "UI/UX",
    services: [
      {
        id: 1,
        icon: AdobeIcon,
        title: "Adobe Tools Designers",
        description:
          "We augment your design team with professionals skilled in Adobe Creative Suite, ensuring high quality graphics, advertisements, and overall design aesthetics.",
      },
      {
        id: 2,
        icon: FigmaIcon,
        title: "Figma Designers",
        description:
          "Our creative team excels in using Figma to design intuitive and visually appealing user interfaces,enhancing user satisfaction and engagement.",
      },
    ],
  };

  const { services, centerText } = data;

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* ✅ FIXED BORDER CONTAINER */}
        <div
          ref={ref}
          className={`bg-[#C4E0FF] p-6 md:p-10 rounded-2xl border border-dashed border-[#F1F9FF] ${
            visible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >

          {/* ── Mobile / Tablet ── */}
          <div className="flex md:hidden flex-col items-center gap-4 w-full">
            {services.map((item, index) => (
              <React.Fragment key={item.id}>

                {/* Card Wrapper (important fix) */}
                <div className="w-full max-w-[95%]">
                  <ServiceCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    bgColor="bg-white"
                    iconBgColor="bg-[#1C1C1E]"
                  />
                </div>

                {index < services.length - 1 && (
                  <>
                    {/* Arrow pointing UP toward card 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-0 h-0 border-x-[6px] border-x-transparent border-b-[10px] border-b-gray-800" />
                      <div className="h-6 border-l-2 border-dashed border-gray-800" />
                    </div>

                    {/* Center Text */}
                    <div className="bg-[#2E6EFE] text-[#FFFFFF] rounded-xl px-6 py-4 text-center w-full max-w-[220px] shadow-md">
                      <p className="text-sm font-normal leading-snug flex flex-col items-center">
                        {centerText} 
                        <span className="font-black">Design</span>
                        
                      </p>
                    </div>

                    {/* Arrow pointing DOWN toward card 2 */}
                    <div className="flex flex-col items-center">
                      <div className="h-6 border-l-2 border-dashed border-gray-800" />
                      <div className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[10px] border-t-gray-800" />
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ── Desktop ── */}
          <div className="hidden md:flex flex-row items-center gap-2">

            {/* Left */}
            <div className="flex-1 min-w-0">
              <ServiceCard
                {...services[0]}
                bgColor="bg-white"
                iconBgColor="bg-[#1C1C1E]"
              />
            </div>

            {/* Connector */}
            <div className="flex items-center w-[10%] px-2">
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[10px] border-r-gray-800" />
              <div className="flex-1 border-t-2 border-dashed border-gray-800" />
            </div>

            {/* Center */}
            <div className="shrink-0 bg-[#2E6EFE] text-[#FFFFFF] rounded-xl px-5 py-5 text-center w-[180px] shadow-md">
              <p className="font-normal leading-snug flex flex-col items-center">
                {centerText}
                <span className="font-black">Design</span>
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center w-[10%] px-2">
              <div className="flex-1 border-t-2 border-dashed border-gray-800" />
              <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-gray-800" />
            </div>

            {/* Right */}
            <div className="flex-1 min-w-0">
              <ServiceCard
                {...services[1]}
                bgColor="bg-white"
                iconBgColor="bg-[#1C1C1E]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ui;