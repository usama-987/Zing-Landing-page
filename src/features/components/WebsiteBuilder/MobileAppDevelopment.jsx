import { useEffect, useRef, useState } from "react";
import containerBg from "../../../assets/Container.png";
import MobileappImg from "../../../assets/DevAug/Mobileapp.png";
import NativeIcon from "../../../assets/DevAug/Native.svg";
import FlutterIcon from "../../../assets/DevAug/Flutter.svg";
import ReactIcon from "../../../assets/DevAug/R.svg";

const services = [
  {
    icon: NativeIcon,
    title: "Native App Developers (Swift & Kotlin)",
    description: "Our native app developers use Swift for iOS and Kotlin for Android to build high-performance applications with superior user experiences.",
  },
  {
    icon: FlutterIcon,
    title: "Flutter Developers",
    description: "We provide Flutter developers to create cross-platform mobile apps with a single codebase, ensuring consistency and efficiency.",
  },
  {
    icon: ReactIcon,
    title: "React Native Developers",
    description: "Our React Native experts deliver mobile applications with a native look and feel, leveraging a unified codebase for both iOS and Android.",
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

const MobileAppDevelopment = ({
  title = "Mobile App Development",
  description = "Building Dynamic, Visually Stunning, And Highly Functional Mobile Apps Tailored To Your Needs.",
  image = MobileappImg,
  items = services,
  reversed = true,
}) => {
  const { ref, visible } = useRowAnimation();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center"
    >
      {/* TEXT */}
      <div
        className={`space-y-6 ${reversed ? "md:order-2 pre-animate-right" : "pre-animate"}${
          visible ? (reversed ? " animate-slide-in-right" : " animate-slide-in-left") : ""
        }`}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#656565] leading-relaxed max-w-xs">{description}</p>
        </div>

        <ul className="space-y-7">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-5 h-5 shrink-0">
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-normal text-[#000000]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#656565] leading-relaxed mt-1 max-w-xs">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div
        className={`${reversed ? "md:order-1 pre-animate" : "pre-animate-right"}${
          visible ? (reversed ? " animate-slide-in-left" : " animate-slide-in-right") : ""
        }`}
      >
        <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] hover-popup">
          <img src={containerBg} alt="background" className="absolute inset-0 w-full h-full object-contain" />
          <div className="relative z-10 w-3/5 sm:w-1/2">
            <img src={image} alt={title} className="w-full h-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;