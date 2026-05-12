import Navbar from "../header/Navbar";
import OldFooter from "../footer/OldFooter";

const PolicyPage = ({ title, sections }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="w-full py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="bg-white p-8 md:p-12 rounded-md">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F0F10] mb-8">
              {title}
            </h1>

            <div className="space-y-6">
              {sections.map((section, index) => (
                <div key={index} className={section.inline ? "inline" : ""}>
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-medium text-[#1C1C1E] mb-3">
                      {section.heading}
                    </h2>
                  )}
                  
                  {section.content && (
                    <div className={`text-sm sm:text-base text-[#656565] leading-relaxed ${section.inline ? "inline" : "mb-3"} whitespace-pre-line`}>
                      {section.isEmail ? (
                        <>
                          <a href={`mailto:${section.content}`} className="text-blue-600 underline hover:text-blue-800">
                            {section.content}
                          </a>
                          {section.inline && " "}
                        </>
                      ) : (
                        section.content
                      )}
                    </div>
                  )}

                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="text-sm sm:text-base text-[#656565] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="space-y-4 mt-4">
                      {section.subsections.map((sub, i) => (
                        <div key={i}>
                          <h3 className="text-lg font-medium text-[#1C1C1E] mb-2">
                            {sub.subheading}
                          </h3>
                          <p className="text-sm sm:text-base text-[#656565] leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OldFooter />
    </div>
  );
};

export default PolicyPage;
