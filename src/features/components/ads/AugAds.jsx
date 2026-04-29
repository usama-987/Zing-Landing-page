import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const AugAds = ({
  title = "Augmenting Your Development Team",
  buttonText = "GET STARTED",
  onButtonClick,
}) => {
  const { ref, visible } = useScrollAnimation(0.2);

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-black text-white rounded-2xl pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-14 xl:px-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight text-white max-w-2xl">
              {title}
            </h2>
            <button
              onClick={onButtonClick}
              className="mt-4 sm:mt-6 px-4 py-1.5 bg-white text-[#1C1C1E] text-[10px] sm:text-xs font-semibold uppercase tracking-wide rounded hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AugAds;
