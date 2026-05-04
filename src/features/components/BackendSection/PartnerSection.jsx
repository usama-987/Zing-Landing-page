import PartnerCard from "../ui/PartnerCard";
import BigcomIcon from "../../../assets/Partner/Bigcom.svg";
import ComquestIcon from "../../../assets/Partner/Comquest.svg";
import BlossendIcon from "../../../assets/Partner/Bloosend.svg";
import MaverickIcon from "../../../assets/Partner/Maverick.svg";
import NavaIcon from "../../../assets/Partner/Nava.svg";
import OracleIcon from "../../../assets/Partner/Bigcom.svg";
import NetIcon from "../../../assets/Partner/Net.svg";
import ShipmaxIcon from "../../../assets/Partner/Shipmax.svg";
import ShoplineIcon from "../../../assets/Partner/Shopline.svg";
import ShoptypeIcon from "../../../assets/Partner/Shoptype.svg";
import SpeedIcon from "../../../assets/Partner/Speed.svg";
import TargetbayIcon from "../../../assets/Partner/Targetbay.svg";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const partners = [
  {
    id: 1,
    icon: BigcomIcon,
    title: "BigCommerce",
    description: "Scalable, feature-rich online stores enhancing user experience and maximizing sales.",
  },
  {
    id: 2,
    icon: BlossendIcon,
    title: "Blossend",
    description: "AI-powered scheduling for quick, seamless doctor-patient appointments anytime, anywhere.",
  },
  {
    id: 3,
    icon: ComquestIcon,
    title: "Commquest",
    description: "Engaging product videos and UGC content that boost trust, conversions, and sales.",
  },
  {
    id: 4,
    icon: MaverickIcon,
    title: "Maverick Creative",
    description: "Social commerce agency specializing in TikTok growth, content, marketing, and influencer partnerships.",
  },
  {
    id: 5,
    icon: NavaIcon,
    title: "NAVA",
    description: "Blending real estate, wellness, and community for purposeful living experiences.",
  },
  {
    id: 6,
    icon: OracleIcon,
    title: "Oracle Cloud Infrastructure (OCI)",
    description: "High-performance, secure cloud solutions enabling scalability, modernization, and business growth.",
  },
  {
    id: 7,
    icon: NetIcon,
    title: "Oracle NetSuite",
    description: "Unified business management solutions enhancing efficiency, scalability, and digital transformation success.",
  },
  {
    id: 8,
    icon: ShipmaxIcon,
    title: "SHIPMAX",
    description: "Tailored strategies to optimize logistics, sales, technology, and operational efficiency.",
  },
  {
    id: 9,
    icon: ShoplineIcon,
    title: "SHOPLINE",
    description: "Blending real estate, wellness, and community for purposeful living experiences.",
  },
  {
    id: 10,
    icon: ShoptypeIcon,
    title: "SHOPTYPE",
    description: "Decentralized social commerce platform empowering creators, brands, communities to earn.",
  },
  {
    id: 11,
    icon: SpeedIcon,
    title: "Oracle NetSuite",
    description: "Unified business management solutions enhancing efficiency, scalability, and digital transformation success.",
  },
  {
    id: 12,
    icon: TargetbayIcon,
    title: "TargetBay",
    description: "Customer engagement, loyalty, and marketing strategies driving conversions and revenue growth.",
  },
];

// Fallback text logo for partners without an icon file
const TextLogo = ({ name }) => (
  <span className="text-sm font-black text-gray-900 tracking-tight leading-none">
    {name}
  </span>
);

const PartnerSection = () => {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-[#000000] p-8 md:p-12 pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              OUR PARTNERS
            </h2>
            <p className="text-[#CCCCCC] text-sm sm:text-base">
              Get In Touch Today And Discover How We Can Drive Success—Together.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((item) => (
              <PartnerCard
                key={item.id}
                icon={item.icon ?? <TextLogo name={item.title} />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;