import HeroImg from "../../../assets/Marketing/Hero.png";
import { scrollToContact } from "../../../hooks/scrollToContact";

const HeroBanner = ({
  title = "",
  highlight = "",
  description = "",
  buttonText = "",
  bgImage = "",
  stats = [],
  onClick,
}) => {
  return (
    <section className="mt-7 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex items-start"
        style={{
          backgroundImage: `url(${bgImage || HeroImg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle light sweep overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-light leading-tight text-[#FFFFFF]">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-[#51A2FF]">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#FFFFFF] font-normal">
              {description}
            </p>
          )}

          {buttonText && (
            <button
              onClick={onClick || scrollToContact}
              className="mt-4 sm:mt-6 px-4 py-1.5 bg-white text-[#1C1C1E] text-[10px] sm:text-xs font-normal uppercase tracking-wide rounded hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              {buttonText}
            </button>
          )}

          {stats.length > 0 && (
            <div className="flex gap-6 sm:gap-8 md:gap-12 mt-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;