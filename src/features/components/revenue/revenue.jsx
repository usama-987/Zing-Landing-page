import React from "react";
import RevenueImage from "../../../assets/revenue.png";
import ContainerImage from "../../../assets/container.png";

const defaultPoints = [
  "Using AI for small tasks instead of real systems",
  "Running ads without improving performance",
  "Ecommerce stores that don't convert",
  "Manual workflows slowing everything down",
  "Tools and data that aren't connected",
];

const Revenue = ({
  title = "Turn AI into revenue,",
  subtitle = "not experiments",
  points = defaultPoints,
  quote = "We implement AI where it actually drives results.",
  image = RevenueImage,
  backgroundImage = ContainerImage,
  showImage = true,
}) => {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"> 
        <div className="bg-white p-8 md:p-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
              <br />
              {subtitle}
            </h2>

            {/* Points */}
            <div className="space-y-3">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">

                  {/* Red circle with X */}
                  <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-lg font-bold leading-none">×</span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            {quote && (
              <div className="pt-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <p className="text-sm sm:text-base lg:text-lg font-medium italic text-gray-900">
                    "{quote}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          {showImage && (
            <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[350px]">

              {/* Background Image */}
              <img
                src={backgroundImage}
                alt="Container background"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Inner Revenue Image */}
              <div className="relative z-10 w-3/5 sm:w-1/2">
                <img
                  src={image}
                  alt="Revenue dashboard"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>

            </div>
          )}

        </div>
      </div>
      </div>
    </section>
  );
};

export default Revenue;
