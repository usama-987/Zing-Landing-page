import HeroImage from "../../../assets/Marketing/Hero.png";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

import { scrollToContact } from "../../../hooks/scrollToContact";

const Ads = ({ 
  title = "If you're serious about scaling your business with AI, ads, and better systems, let's talk.",
  buttonText = "GET A FREE AI & GROWTH AUDIT",
  onButtonClick 
}) => {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`rounded-2xl overflow-hidden bg-cover bg-center min-h-[200px] flex items-center pre-animate${visible ? " animate-slide-in-left" : ""}`}
          style={{ 
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: '100% 100%'
          }}
        >
          <div className="w-full px-8 md:px-12 py-10 md:py-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight max-w-md">
              {title}
            </h2>

            <button
              onClick={onButtonClick || scrollToContact}
              className="mt-6 px-6 py-2.5 bg-[#ffffff] text-[#1C1C1E] text-xs sm:text-sm font-semibold uppercase tracking-wide rounded-lg hover:bg-blue-200 transition-all duration-200"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
