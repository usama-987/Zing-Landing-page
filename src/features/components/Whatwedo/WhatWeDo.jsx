import Card from "../ui/Card";

const services = [
  {
    title: "SEO",
    description:
      "At Zing, we drive organic traffic and boost your website's visibility through SEO. Our team nails keyword research and strategic on-page and off-page tactics to elevate your search ranking. From meta tags to backlinks, we ensure your site shines in search results. With data-driven insights and ongoing monitoring, we keep your SEO strategy ahead, ensuring lasting growth. Let Zing unleash your site's search engine potential.",
    large: true,
  },
  {
    title: "Website Development",
    description:
      "At Zing, we specialize in website development. Our expert team combines cutting-edge design with intuitive functionality for standout websites. From responsive layouts to optimized performance, we ensure your site delivers excellence across all devices. Whether launching new or revamping existing sites, Zing elevates your brand and drives results.",
    large: true,
  },
  {
    title: "Email Marketing",
    description:
      "At Zing, we skillfully target past customers with captivating email flows and campaigns to increase your customer lifetime value. Our personalized messages engage customers, enhancing their experience from welcome emails to re-engagement efforts. With strategic campaign design and impactful results to bring you consistent new revenue.",
    large: false,
  },
  {
    title: "Ads Management",
    description:
      "Zing nails ads management, honing in on Meta and Google Ads. We optimize campaigns to target ideal audiences to deliver real results. We create compelling ad content aligned with your goals using advanced analytics. Whether it's expanding on Meta or ruling Google Ads, we keep your brand leading in digital ads to ensure an impressive ROI and sustainable growth.",
    large: false,
  },
  {
    title: "Social Media Posting",
    description:
      "At Zing, we're experts in crafting organic social media strategies that boost your brand's online presence. Using platforms like Facebook and Instagram, our team creates engaging content tailored to your audience. With data-driven insights and brand awareness, we deliver compelling posts that drive interaction and community engagement. Our approach aims to elevate your brand and foster lasting connections with your customers.",
    large: false,
  },
];

const WhatWeDo = () => {
  const largeCards = services.filter((s) => s.large);
  const smallCards = services.filter((s) => !s.large);

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000DE]">
              What We Do
            </h2>
            <p className="text-[#656565] text-sm mt-1">All-encompassing solutions</p>
          </div>

          {/* Top row — 2 large cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {largeCards.map((card) => (
              <Card key={card.title} title={card.title} description={card.description} 
              bgColor= "bg-[#F0F0F0]" />
            ))}
          </div>

          {/* Bottom row — 3 small cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {smallCards.map((card) => (
              <Card key={card.title} title={card.title} description={card.description} 
              bgColor= "bg-[#F0F0F0]"/>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;