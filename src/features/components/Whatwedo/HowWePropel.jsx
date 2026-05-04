import BgBlue from "../../../assets/Marketing/BgBlue.png";
import Market1 from "../../../assets/Marketing/Market1.png";
import Card from "../ui/Card";

const cards = [
  {
    title: "Adaptive Solutions",
    description:
      "As such, we are solutions on creating adaptive e-commerce solutions that evolve alongside the dynamic landscape of our clients' businesses. Recognizing that the only constant is change, our development approach emphasizes flexibility and adaptability. Whether it's adopting new features, accommodating increased user traffic, or embracing emerging technologies, our adaptive solutions ensure longevity and relevance, allowing businesses to thrive in ever-evolving markets.",
  },
  {
    title: "Strategic Scaling",
    description:
      "We approach e-commerce development with a strategic mindset, ensuring that our solutions align seamlessly with the unique business goals of our clients. Our team collaborates closely with stakeholders to understand their long-term vision, enabling us to devise e-commerce strategies that go beyond immediate needs.",
  },
  {
    title: "Performance Enhancement",
    description:
      "We approach e-commerce development with a strategic mindset, ensuring that our solutions align seamlessly with the unique business goals of our clients. Our team collaborates closely with stakeholders to understand their long-term vision, enabling us to devise e-commerce strategies that go beyond immediate needs.",
  },
  {
    title: "Data-Driven Growth",
    description:
      "We empower businesses through data-driven insights, optimizing e-commerce operations and guiding strategic decisions. Our focus on analyzing user behavior, market trends, and performance metrics uncovers growth opportunities, enhancing efficiency, driving sales, and positioning clients at the forefront of their industry. This integrated approach forms the cornerstone of our commitment to propelling businesses forward in the competitive e-commerce landscape.",
  },
];

const HowWePropel = () => {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12">
          {/* Heading above everything */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            How We Propel Your
            <span className="block">Business Forward</span> 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">

            {/* LEFT — image */}
            <div className="relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[350px] hover-popup">
              <img
                src={BgBlue}
                alt=""
                className="absolute inset-0 w-full h-full object-contain"
              />
              <div className="relative z-10 w-3/5 sm:w-1/2">
                <img
                  src={Market1}
                  alt="Marketing dashboard"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* RIGHT — cards */}
            <div className="flex flex-col gap-4">
              {cards.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  bgColor="bg-[#F0F0F0]"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWePropel;