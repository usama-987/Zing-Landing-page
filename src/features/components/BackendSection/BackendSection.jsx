import ServiceCard from "../ui/ServiceCard";
import NodeIcon from "../../../assets/DevAug/Js.svg";
import PhpIcon from "../../../assets/DevAug/Php.svg";
import NetIcon from "../../../assets/DevAug/Net.svg";
import RorIcon from "../../../assets/DevAug/RoR.svg";
import PythonIcon from "../../../assets/DevAug/Python.svg";
import CppIcon from "../../../assets/DevAug/C.svg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    icon: NodeIcon,
    title: "Node.js Developers",
    description: "Our Node.js experts build efficient and scalable server-side applications, perfect for real-time applications and microservices architectures.",
  },
  {
    id: 2,
    icon: PhpIcon,
    title: "PHP Developers",
    description: "We provide skilled PHP developers to create dynamic and robust backend systems, ideal for content management systems, e-commerce platforms, and web applications.",
  },
  {
    id: 3,
    icon: NetIcon,
    title: ".NET Developers",
    description: "Our .NET developers deliver powerful and secure backend solutions, suitable for enterprise-level applications and complex system integrations.",
  },
  {
    id: 4,
    icon: RorIcon,
    title: "Ruby on Rails (RoR) Developers",
    description: "We offer Ruby on Rails developers who excel in building clean, maintainable, and efficient web applications rapidly.",
  },
  {
    id: 5,
    icon: PythonIcon,
    title: "Python & Flask Developers",
    description: "Our Python developers, proficient in Flask, create scalable and efficient backend systems, ideal for web applications requiring rapid development and high performance.",
  },
  {
    id: 6,
    icon: CppIcon,
    title: "C++ Developers",
    description: "Our C++ developers build high-performance applications, suitable for system software, game development, and real-time simulations.",
  },
];

const BackendSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Backend Development
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              We offer full-spectrum innovation through the strategic application, design, and development of modern technologies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                bgColor="bg-[#F0F0F0]"
                iconBgColor="bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;