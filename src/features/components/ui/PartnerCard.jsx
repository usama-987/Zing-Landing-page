const PartnerCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-200 p-5 hover-popup flex flex-col gap-3">
      {/* Icon */}
      <div className="h-10 flex items-center">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="h-8 w-auto object-contain" />
        ) : (
          icon
        )}
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
};

export default PartnerCard;