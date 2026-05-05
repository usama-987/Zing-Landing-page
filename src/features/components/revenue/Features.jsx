import ImageCard from "../../../assets/DevAug/img1.png";
import BgImage from "../../../assets/DevAug/BgBlue.png";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const FeatureSection = ({
  title = "Enhance your development capabilities",
  description = "At Zing, we specialize in augmenting your development team with expert developers across a range of coding languages and platforms, ensuring top-notch solutions for your business needs.",
  image = ImageCard,
  backgroundImage = BgImage,
}) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div ref={ref} className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

            {/* LEFT TEXT */}
            <div className="flex flex-col justify-center space-y-3 ">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-medium text-[#0F0F10] leading-tight  ">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xs ">
                {description}
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <div
                className="relative rounded-2xl overflow-hidden flex items-center justify-center hover-popup"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  maxWidth: "420px",
                  height: "clamp(160px, 30vw, 300px)",
                }}
              >
                <img
                  src={image}
                  alt="Development tools"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;