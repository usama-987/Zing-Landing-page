const SoftwareCard = ({ title, subtitle, items = [], type = "wrong" }) => {
  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 w-full h-full">
      
      {/* Title */}
      <h3 className="text-lg font-semibold text-black mb-1">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 mb-4">
        {subtitle}
      </p>

      {/* List */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            
            {/* Icon */}
            <span
              className={`mt-1 text-xs font-bold ${
                type === "wrong" ? "text-red-500" : "text-green-500"
              }`}
            >
              {type === "wrong" ? "✖" : "✔"}
            </span>

            {/* Text */}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwareCard;