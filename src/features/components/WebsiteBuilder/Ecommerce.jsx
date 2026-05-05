import  { useEffect, useRef, useState } from "react";
import BgBlue from "../../../assets/DevAug/BgBlue.png";
import Ecom1 from "../../../assets/DevAug/Ecom1.png";
import Ecom2 from "../../../assets/DevAug/Ecom2.png";
import ShopifyIcon from "../../../assets/DevAug/Shopify.svg";
import WooIcon from "../../../assets/DevAug/Woo.svg";
import BigcomIcon from "../../../assets/DevAug/Bigcom.svg";
import MagentoIcon from "../../../assets/DevAug/Magento.svg";

const services = [
  {
    icon: ShopifyIcon,
    title: "Shopify Developers",
    description:
      "Our Shopify developers customize and optimize your online store, enhancing functionality and user engagement to boost sales.",
  },
  {
    icon: WooIcon,
    title: "WooCommerce Developers",
    description:
      "We offer WooCommerce experts who tailor your e-commerce platform to meet specific business requirements, ensuring a smooth and efficient shopping experience.",
  },
  {
    icon: BigcomIcon,
    title: "BigCommerce Developers",
    description:
      "We offer BigCommerce experts who tailor your e-commerce platform to meet specific business requirements, ensuring a smooth and efficient shopping experience.",
  },
  {
    icon: MagentoIcon,
    title: "Magento Developers",
    description:
      "We provide Magento developers to create flexible and powerful e-commerce solutions tailored to your business needs.",
  },
];

function useRowAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const Ecommerce = ({
  title = "E-commerce Platforms",
  description =
    "Crafting Sleek, Responsive, And User-Friendly Web Interfaces For An Exceptional Digital Experience.",
  items = services,
}) => {
  const { ref, visible } = useRowAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-white p-6 sm:p-8 md:p-12 pre-animate${
            visible ? " animate-slide-in-left" : ""
          }`}
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#000000] leading-tight">
              {title}
            </h2>
            <p className="mt-3 text-sm sm:text-base font-normal text-[#656565] leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* MAIN GRID → STACK ON MOBILE/TABLET */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT */}
            <ul className="space-y-7">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 shrink-0  ">
                    <img
                      src={item.icon}
                      alt={item.title}    
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-normal text-[#000000]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#656565] leading-relaxed mt-1 max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* RIGHT */}
            <div
              className={`pre-animate-right${
                visible ? " animate-slide-in-right" : ""
              } flex justify-center lg:justify-end -mt-6`}
            >
              <div
                className="
                  relative rounded-2xl overflow-hidden hover-popup
                  p-4 sm:p-6 md:p-8
                  w-full lg:w-[75%]
                  flex flex-col gap-4
                "
                style={{
                  backgroundImage: `url(${BgBlue})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <img
                  src={Ecom1}
                  alt="Ecommerce dashboard 1"
                  className="w-full rounded-xl shadow-lg object-cover"
                />
                <img
                  src={Ecom2}
                  alt="Ecommerce dashboard 2"
                  className="w-full rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;