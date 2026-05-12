import PolicyPage from "../components/Policy/PolicyPage";

const cancellationPolicySections = [
  {
    heading: "",
    content: "Zing offers digital marketing and custom software development as well as an AI chatbot.",
  },
  {
    heading: "",
    content: "To qualify for a refund for digital marketing or custom software development projects you agreed to with Zing, you must abide by the terms as signed and agreed to by both parties when you begin those projects. Refund and cancellation of those projects vary depending on the scope of the project.",
  },
  {
    heading: "",
    content: "projects vary depending on the scope of the project. For the AI chatbot which Zing offers, there is an initial free trial period for all users. After that, a user can cancel at any time but there is no refund for orders for the AI chatbot. We pride ourselves on working with all of our customers so if you have a question or concern, please message",
  },
  {
    heading: "",
    content: "hello@myzing.io",
    isEmail: true,
    inline: true,
  },
  {
    heading: "",
    content: "effy@myzing.io",
    isEmail: true,
  },
];

const CancellationPolicy = () => {
  return <PolicyPage title="Zing's Refund and Cancellation Policy" sections={cancellationPolicySections} />;
};

export default CancellationPolicy;
