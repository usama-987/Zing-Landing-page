import WorkCard from "./WorkCard";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import Img1 from "../../../assets/SD/Img1.png";
import Img2 from "../../../assets/SD/Img2.png";
import Img3 from "../../../assets/SD/Img3.png";

const defaultProjects = [
  {
    image: Img1,
    title: "Appsuma",
    desc: "AppSumo offers exclusive, lifetime deals on software and digital tools for entrepreneurs.",
    btnText: "START A PROJECT",
  },
  {
    image: Img2,
    title: "The Future Connoisseurs",
    desc: "A luxury membership alliance providing exclusive access to high-fashion events and rare collectibles.",
    btnText: "GET A FREE WEBSITE AUDIT",
  },
  {
    image: Img3,
    title: "Saavy naturals",
    desc: "Chef-crafted skincare made from 100% plant based, food grade ingredients. Handmade, sulfate free products.",
    btnText: "BOOK A STRATEGY CALL",
  },
];

const OurWork = ({ title = "Our Work", projects = defaultProjects }) => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Centered heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#262626] text-center mb-10 md:mb-14">
            {title}
          </h2>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.map((project, i) => (
              <WorkCard
                key={i}
                image={project.image}
                title={project.title}
                desc={project.desc}
                btnText={project.btnText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;