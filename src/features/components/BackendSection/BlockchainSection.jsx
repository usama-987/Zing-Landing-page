import React from "react";
import ServiceCard from "../ui/ServiceCard";
import BlockchainIcon from "../../../assets/DevAug/BlockChain.svg";
import Web3Icon from '../../../assets/DevAug/Web3.svg';
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const BlockchainSection = () => {
  const { ref, visible } = useScrollAnimation();

  // ✅ Data
  const data = {
    centerText: "Blockchain and WEB3 development",
    services: [
      {
        id: 1,
        icon: BlockchainIcon,
        title: "Blockchain Developers (Solidity)",
        description:
          "Our blockchain developers specialize in building decentralized applications (dApps), smart contracts using Solidity, and blockchain integrations.",
      },
      {
        id: 2,
        icon: Web3Icon,
        title: "Web3 Developers",
        description:
          "We provide Web3 developers who are proficient in decentralized protocols and modern web3 applications.",
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
          className={`bg-[#F0F0F0] p-6 md:p-10 rounded-2xl border border-dashed border-gray-800 ${
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
                    <div className="bg-[#1C1C1E] text-white rounded-xl px-6 py-4 text-center w-full max-w-[220px]">
                      <p className="text-sm font-bold leading-snug">
                        {centerText}
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
            <div className="shrink-0 bg-[#000000] text-[#FFFFFF] rounded-xl px-5 py-5 text-center w-[180px]">
              <p className="text-base font-semibold leading-snug">
                {centerText}
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

export default BlockchainSection;