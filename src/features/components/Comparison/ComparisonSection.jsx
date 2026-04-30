
import Card from "../../components/ui/SoftwareCard"
import { useScrollAnimation } from "../../../hooks/useScrollAnimation"

const ComparisonSection = () => {
  const { ref, visible } = useScrollAnimation();

  const cards = [
    {
      title: "The Old (Wrong) Way",
      subtitle: "Here's the current state of most affairs:",
      type: "wrong",
      items: [
        "They are working with off-shore developers in off hours and it is hard to get a hold of them.",
        "Hourly Billing and minimums causing you to go over budget.",
        "Lots of promises and projects not getting delivered at all or on time.",
        "Overpaying just to work with a local developer",
      ],
    },
    {
      title: "The New Way",
      subtitle: "Here's what you need to transform into:",
      type: "right",
      items: [
        "Have a reliable team that acts as an in-house provider",
        "Pay based on results as opposed to hourly retainers",
        "Work with experienced developers that have worked on hundreds of projects",
        "73 years of software development expertise",
      ],
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div
          ref={ref}
          className={`bg-black p-8 md:p-12 rounded-2xl pre-animate${visible ? " animate-slide-in-left" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                items={card.items}
                type={card.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;