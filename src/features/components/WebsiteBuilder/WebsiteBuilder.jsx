import { useEffect, useRef, useState } from "react";
import BgBlue from "../../../assets/DevAug/BgBlue.png";
import WebappImg from "../../../assets/DevAug/Webapp.png";
import WordpressIcon from "../../../assets/DevAug/Wordpress.svg";
import WebflowIcon from "../../../assets/DevAug/WebFlow.svg";
import SquarespaceIcon from "../../../assets/DevAug/SquareSpace.svg";

const services = [
  {
    icon: WordpressIcon,
    title: "WordPress Developers",
    description: "Our WordPress developers create dynamic and customizable websites, ideal for blogging, business sites, and e-commerce.",
  },
  {
    icon: SquarespaceIcon,
    title: "Squarespace Developers",
    description: "We offer Squarespace experts to design and build stunning websites with ease, focusing on aesthetics and user experience.",
  },
  {
    icon: WebflowIcon,
    title: "Webflow Developers",
    description: "Our Webflow developers craft visually appealing and responsive websites, combining the power of visual design with robust development capabilities.",
  },
];

function useRowAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const WebsiteBuilder = ({
  title = "Website Builders",
  description = "Building Dynamic, Visually Stunning, And Highly Functional Websites Tailored To Your Needs.",
  image = WebappImg,
  items = services,
}) => {
  const { ref, visible } = useRowAnimation();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center"
    >
      {/* LEFT — Text */}
      <div className={`space-y-6 pre-animate${visible ? " animate-slide-in-left" : ""}`}>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base font-normal text-[#656565] leading-relaxed max-w-md">
            {description}
          </p>
        </div>

        <ul className="space-y-7">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-5 h-5 shrink-0">
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal text-[#0F0F0F]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#656565] leading-relaxed mt-1 max-w-xs">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — Image */}
      <div className={`pre-animate-right${visible ? " animate-slide-in-right" : ""}`}>
        <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] hover-popup">
          <img src={BgBlue} alt="background" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative z-10 w-3/5 sm:w-1/2">
            <img src={image} alt={title} className="w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;