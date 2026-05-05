
import ServiceCard from "../ui/ServiceCard";
import ReactIcon from "../../../assets/DevAug/React.svg";
import AngularIcon from "../../../assets/DevAug/Angular.svg";
import JavaIcon from "../../../assets/DevAug/Java.svg";
import HtmlIcon from "../../../assets/DevAug/Html.svg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    icon: ReactIcon,
    title: "React.js Developers",
    description: "Our React.js developers craft interactive and high performance user interfaces, delivering seamless use experiences.",
  },
  {
    id: 2,
    icon: AngularIcon,
    title: "Angular.js Developers",
    description: "We augment your team with Angular.js professionals who excel in building dynamic single-page applications with enhanced functionality.",
  },
  {
    id: 3,
    icon: JavaIcon,
    title: "Next.js Developers",
    description: "Our Next.js experts specialize in server-side rendering and static site generation, optimizing performance and SEO for your web applications.",
  },
  {
    id: 4,
    icon: HtmlIcon,
    title: "Html Javascript Developers",
    description: "Our Next.js experts specialize in server-side rendering and static site eneration, optimizing performance and SEO for your web applications.",
  },
];

const FrontendSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-400 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-[#000000] p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#FFFFFF] mb-3">
              Frontend Development
            </h2>
            <p className="text-[#CCCCCC] font-normal text-sm sm:text-base">
             Crafting sleek, responsive, and user-friendly web interfaces for An exceptional digital experience.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                bgColor="bg-[#FFFFFF]"
                iconBgColor="bg-[#000000]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendSection;