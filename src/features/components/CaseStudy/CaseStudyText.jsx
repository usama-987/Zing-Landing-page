import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const CaseStudyText = ({
  heading = "",
  subtitle = "",
  quotes = [],
}) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`rounded-2xl p-8 md:p-12 relative overflow-hidden pre-animate${visible ? " animate-slide-in-left" : ""}`}
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E"),
              linear-gradient(150deg, #ffffff 0%, #dde6ef 40%, #b8c9d9 100%)
            `,
            transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            WebkitTransform: visible ? 'translateX(0)' : 'translateX(-60px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.7s ease',
            WebkitTransition: 'all 0.7s ease',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F0F10] leading-tight mb-3">
            {heading}
          </h2>

          {subtitle && (
            <p className="text-sm sm:text-base text-[#373737] mb-8 max-w-xl">
              {subtitle}
            </p>
          )}

          <div className="space-y-6">
            {quotes.map((q, i) => (
              <div key={i} className="pl-5" style={{ borderLeft: "4px solid #2E2E2E" }}>
                <p className="text-xs sm:text-sm text-[#000000] leading-relaxed max-w-2xl">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyText;
