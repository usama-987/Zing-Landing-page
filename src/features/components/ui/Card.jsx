const Card = ({ title, description, bgColor = "bg-white" }) => {
  return (
    <div className={`border border-gray-200 ${bgColor} p-8 md:p-10 hover-popup`}>
      <h3 className="text-base sm:text-lg font-semibold text-[#000000DE] mb-3">
        {title}
      </h3>
      <p className="text-[#656565] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;