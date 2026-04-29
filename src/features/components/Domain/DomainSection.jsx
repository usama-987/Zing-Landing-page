import ServiceCard from "../ui/ServiceCard";
import JewelryIcon from "../../../assets/Marketing/Jewerly.svg";
import BeefIcon from "../../../assets/Marketing/Beef.svg";
import NaturalIcon from "../../../assets/Marketing/NaturalProduct.svg";
import FashionIcon from "../../../assets/Marketing/Fashion.svg";
import HempIcon from '../../../assets/Marketing/Hemp.svg'
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    icon: JewelryIcon,
    title: "jewelry",
    description: "Discover exquisite craftsmanship and timeless elegance in our curated collection of fine jewelry. Each piece is a testament to our passion for beauty and precision.",
  },
  {
    id: 2,
    icon: BeefIcon,
    title: "Beef",
    description: "Savor the exceptional quality of our pasture-raised and grain-fed beef. Meticulously cared for, our cattle produce beef of unparalleled taste and tenderness, ensuring a delightful dining experience.",
  },
  {
    id: 3,
    icon: NaturalIcon,
    title: "Natural Products",
    description: "Experience the goodness of nature with our range of natural products. From skincare to wellness essentials, we bring you thoughtfully curated items that prioritize your well-being.",
  },
  {
    id: 4,
    icon: FashionIcon,
    title: "Fashion",
    description: "Step into the world of style with our fashion offerings. From the latest trends to timeless classics, our curated fashion collection reflects our commitment to quality and elegance.",
  },
  {
    id: 5,
    icon: HempIcon,
    title: "Hemp Products",
    description: "Explore the versatility of hemp in our range of products. From sustainable textiles to health-conscious choices, our hemp products embody innovation and eco- friendliness.",
  },
];

const DomainSection = () => {
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-3">
  Explore Our Mastery in
  <span className="block">Diverse Domains</span>
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

export default DomainSection;
