
import BgBlue from "../../../assets/SD/BgBlue.png";

const WorkCard = ({ image, title, desc, btnText }) => {
  return (
    <div className="flex flex-col h-full">
      {/* BgBlue background with inner image */}
      <div
        className="relative rounded-2xl overflow-hidden hover-popup flex items-center justify-center"
        style={{
          backgroundImage: `url(${BgBlue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "260px",
        }}
      >
        <img
          src={image}
          alt={title}
          className="w-[85%] h-[85%] object-contain rounded-xl shadow-lg"
        />
      </div>

      {/* Text — left aligned */}
      <div className="mt-4 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-[#3B3B3B]">{title}</h3>
        <p className="text-xs sm:text-sm text-[#656565] leading-relaxed mt-1 flex-1">{desc}</p>
        <button className="mt-4 w-fit px-4 py-2 border bg-[#1C1C1E] border-gray-900 text-[#FFFFFF] text-xs font-normal uppercase tracking-wide rounded-lg transition-all duration-200">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default WorkCard;