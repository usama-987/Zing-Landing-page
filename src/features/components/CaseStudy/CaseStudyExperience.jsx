import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { scrollToContact } from "../../../hooks/scrollToContact";
import ColonIcon from "../../../assets/CaseStudy1/Colon.svg";

const CaseStudyExperience = ({
  title = "",
  subtitle = "",
  steps = [],
  bgImage = "",
  topImage = "",
  bottomImage = "",
  pullQuote1 = "",
  pullQuote1Sub = "",
  pullQuote2 = "",
  pullQuote2Sub = "",
  buttonText = "START NOW",
}) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0F0F10] mb-1">
            {title}
          </h2>
          <p className="text-sm text-[#656565] mb-10 max-w-xl">{subtitle}</p>

          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-10">
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-5 h-5 object-contain shrink-0"
                    />
                    <h3 className="text-sm sm:text-base font-normal text-[#1C1C1E]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#656565] leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Top image with blue bg */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  maxWidth: "420px",
                  height: "300px",
                }}
              >
                <img
                  src={topImage}
                  alt="top visual"
                  className="w-4/5 h-4/5 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Bottom image with blue bg */}
            <div className="flex justify-center md:justify-start">
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  maxWidth: "420px",
                  height: "300px",
                }}
              >
                <img
                  src={bottomImage}
                  alt="bottom visual"
                  className="w-4/5 h-4/5 object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Quotes */}
            <div className="space-y-6 flex flex-col justify-center">
              <div>
                <img src={ColonIcon} alt="quote" className="w-8 h-8 mb-2" style={{ filter: "brightness(0)" }} />
                <p className="text-base font-medium text-[#000000] leading-snug">
                  {pullQuote1}
                </p>
                {pullQuote1Sub && (
                  <p className="text-xs text-[#656565] mt-1">{pullQuote1Sub}</p>
                )}
              </div>

              <div>
                <img src={ColonIcon} alt="quote" className="w-8 h-8 mb-2" style={{ filter: "brightness(0)" }} />
                <p className="text-base font-mrdium text-[#000000] leading-snug">
                  {pullQuote2}
                </p>
                {pullQuote2Sub && (
                  <p className="text-xs text-[#656565] mt-1">{pullQuote2Sub}</p>
                )}
              </div>

              <button
                onClick={scrollToContact}
                style={{ backgroundColor: "#1C1C1E", color: "#ffffff" }}
                className="px-6 py-2 text-sm font-normal rounded w-fit hover:bg-gray-800 transition-all duration-200"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyExperience;
