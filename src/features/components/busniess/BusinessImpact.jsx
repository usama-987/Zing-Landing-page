import React from "react";

const BusinessImpact = () => {
  // Data (props-like structure inside same file)
  const data = {
    title: "What this means for your business",
    stats: [
      { value: "$5 to $1000", label: "Scaled paid ads per month" },
      { value: "88%", label: "Increased conversion rate" },
      { value: "20+ h/week", label: "Save by building internal system" },
      { value: "98%", label: "Improved ROAS" },
    ],
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-black text-white p-8 md:p-12 rounded-2xl">
          <div className="text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          {data.title}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-bold">
                {item.value}
              </h3>
              <p className="text-gray-400 mt-2 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;