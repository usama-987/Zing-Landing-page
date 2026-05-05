

const ServiceCard = ({ title, description, icon, bgColor = "bg-white", iconBgColor = "#FFFFFF" }) => {
  return (
    <div className={`border border-gray-200 ${bgColor} p-6 hover-popup`}>
      {/* Icon */}
      <div className={`w-10 h-10 flex items-center justify-center mb-4 ${iconBgColor} rounded-lg p-1.5`}>
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        ) : (
          icon
        )}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-normal text-[#202124]  mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#656565] font-normal text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;