import React from "react";
import ServiceCard from "../ui/ServiceCard";
import MLIcon from "../../../assets/DevAug/Ml.svg";
import LotIcon from "../../../assets/DevAug/Lot.svg";
import IcoIcon from "../../../assets/DevAug/Ico.svg";
import VrIcon from "../../../assets/DevAug/Vr.svg";
import FlaskIcon from "../../../assets/DevAug/Flask.svg";
import CppIcon from "../../../assets/DevAug/C+.svg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    icon: MLIcon,
    title: "Machine Learning Integration",
    description: "Our machine learning specialists integrate advanced ML models into your full-stack web and mobile applications, enhancing functionality with predictive analytics, recommendation systems, and automation features.",
  },
  {
    id: 2,
    icon: LotIcon,
    title: "LoT Development",
    description: "Our IoT developers design and implement connected systems, enabling smart device integrations and real-time data processing for enhanced operational efficiency.",
  },
  {
    id: 3,
    icon: VrIcon,
    title: "AR/VR Development",
    description: "We offer AR/VR developers who create immersive augmented reality (AR) and virtual reality (VR) experiences, enhancing user engagement and providing innovative solutions across various industries.",
  },
  {
    id: 4,
    icon: IcoIcon,
    title: "Ruby on Rails (RoR) Developers",
    description: "Our experienced project managers ensure that your projects are   delivered on time, within budget, and meet your quality standards. They handle planning, execution, monitoring, and closing of projects, ensuring seamless communication and coordination among stakeholders.",
  },
  {
    id: 5,
    icon: FlaskIcon,
    title: "Python & Flask Developers",
    description: "Our DevOps engineers streamline your development and operations processes, automating workflows, ensuring continuous integration and continuous deployment (CI/CD). They enhance collaboration between development and IT operations, improving software delivery speed and reliability.",
  },
  {
    id: 6,
    icon: CppIcon,
    title: "C++ Developers",
    description: "Our QA engineers ensure that your applications are bug-free and meet the highest quality standards. They perform rigorous testing, including functional, performance, and security testing, to identify and fix issues before deployment, ensuring a smooth user experience.",
  },
];

const DevelopmentSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-400 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              More Of over <br />Development teams
            </h2>
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

export default DevelopmentSection;