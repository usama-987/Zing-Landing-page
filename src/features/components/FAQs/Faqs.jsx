import { useState } from "react";

const faqData = [
  {
    question: "What does it mean that Zing is your Growth Partner?",
    answer:
      "Zing works with you on your entire marketing process, not just one channel. We manage ads, SEO, email marketing, social media, website optimization, and more so you can focus on your business operations while we help you grow sales.",
  },
  {
    question: "How much does Zing charge?",
    answer:
      "Pricing depends on the services you choose and your monthly ad budget. It typically ranges from $1,000 to $5,000 per month.",
  },
  {
    question: "Does Zing just offer one service, such as only email marketing or ads?",
    answer:
      "Yes, we can also provide individual services like ads or email marketing if you only need one specific solution.",
  },
  {
    question: "What is Zing's guarantee?",
    answer:
      "We guarantee that if we do not double your investment, we will work for free until we do.",
  },
  {
    question: "How much can you make?",
    answer:
      "Some clients have seen up to 40% revenue growth within a single quarter depending on strategy and execution.",
  },
  {
    question: "How does this help you?",
    answer:
      "Instead of spending years learning marketing skills, you can focus on your core business while we handle growth systems and provide scalable processes.",
  },
  {
    question: "Why is Zing different from other agencies?",
    answer:
      "Unlike one-size-fits-all agencies, Zing uses multiple channels like ads, SEO, email, social media, and automation together to maximize results.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl">

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#000000DE] mb-8">
            FAQ'S
          </h2>

          {/* FAQ rows */}
          <div>
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center gap-4 py-4 text-left group"
                >
                  {/* +/- icon */}
                  <span className="text-blue-500 text-xl font-bold w-5 flex-shrink-0 leading-none">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  <span className="text-sm sm:text-base text-[#000000DE] font-normal group-hover:text-blue-500 transition-colors duration-200">
                    {item.question}
                  </span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="pl-9 pb-4 text-sm text-[#656565] leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}