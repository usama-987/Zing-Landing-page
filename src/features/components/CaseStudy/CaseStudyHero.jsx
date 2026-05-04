
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const CaseStudyHero = ({
  heading = "",
  sections = [],
  userImage = "",
  logoImage = "",
}) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* LEFT — Heading + sections */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900  mb-8">
                {heading}
              </h2>

              <div className="space-y-8">
                {sections.map((section, i) => (
                  <div key={i}>
                    {/* Icon + Title on same line */}
                    <div className="flex items-center gap-3 mb-1">
                      <img src={section.icon} alt={section.title} className="w-6 h-6 object-contain flex-shrink-0" />
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    {/* Description below */}
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                      {section.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — User image + logo */}
            <div className="relative flex items-end justify-center h-full">
              {/* User photo */}
              <img
                src={userImage}
                alt="Person"
                className="w-[80%] h-[80%] object-cover object-top mx-auto"
              />

              {/* Logo box — bottom left overlapping image */}
              {logoImage && (
                <div className="absolute bottom-0 left-0 bg-white rounded-xl shadow-md p-2">
                  <img src={logoImage} alt="Logo" className="w-16 h-16 object-contain" />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;